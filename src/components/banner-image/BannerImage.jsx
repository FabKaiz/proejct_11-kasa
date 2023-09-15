import './bannerImage.scss';


const BannerImage = ({ text, img }) => {
  return (
    <>
      {
        img && (
          <div className="section banner__image-container">
            <div className="banner__image-wrapper">
              <img src={img} alt="Banner" className="banner__image" />
            </div>
            {text && <h1 className="banner__image-title">{text}</h1>}
          </div>

        )
      }
    < />
  );
};

export default BannerImage;