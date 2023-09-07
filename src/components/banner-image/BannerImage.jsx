import './bannerImage.scss';
import BannerImg from '/assets/home-banner.png?url';


const BannerImage = () => {
  return (
    <div className="section banner__image-container">
      <div className="banner__image-wrapper">
        <img src={BannerImg} alt="Banner" className="banner__image" />
      </div>

      <h1 className="banner__image-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default BannerImage;