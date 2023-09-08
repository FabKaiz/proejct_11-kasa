import { useState } from "react";
import GalleryCard from "../gallery-card/GalleryCard.jsx";
import './gallery.scss'
import useFetch from "../../hooks/useFetch.jsx";

const Gallery = () => {
  const [url, setUrl] = useState("/data/logements.json");
  const { data: logements, isPending, error } = useFetch(url);

  return (
    <section className="gallery__container">
      {error && <p>{error}</p>}

      {isPending && <p>Chargement...</p>}

      {logements?.length > 0 ? (
        <ul>
          {logements.map((logement) => (
            <GalleryCard
              key={logement.id}
              {...logement}
            />
          ))}
        </ul>
      ) : (
        <h2>Aucun logement pour le moment.</h2>
      )}
    </section>
  );
};

export default Gallery;