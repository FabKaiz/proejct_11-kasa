import { useEffect, useState } from "react";
import GalleryCard from "../gallery-card/GalleryCard.jsx";
import './gallery.scss'

const Gallery = () => {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);

  const getLogements = async () => {
    const response = await fetch("data/logements.json");

    if (!response.ok) setError("Oops! Something went wrong : " + response.statusText);

    const data = await response.json();
    setLogements(data);
    console.log(data)
  }

  useEffect(() => {
    getLogements();
  }, []);


  return (
    <section className="gallery__container">
      {error && (
        <p>{error}</p>
      )}

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