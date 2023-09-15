import './home.scss'
import BannerImage from "../../components/banner-image/BannerImage.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";
import BannerImg from '/assets/home-banner.png?url';


function Home() {
  return (
    <>
      <BannerImage text={'Chez vous, partout et ailleurs'} img={BannerImg} />
      <Gallery />
    </>
  )
}

export default Home
