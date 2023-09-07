import { Link } from "react-router-dom";
import './galleryCard.scss'

const GalleryCard = ({ id, cover, title }) => {
  return (
    <li className="gallery__card">
      <Link to={`/logements/${id}`} className='gallery__card-link'>
        <div className="gallery__card-image">
          <img src={cover} alt={title} />
        </div>
        <div className="gallery__card-content">
          <h2 className="gallery__card-title">{title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default GalleryCard;