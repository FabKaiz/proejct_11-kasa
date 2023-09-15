import BannerSwiper from '../../components/banner-swiper/BannerSwiper.jsx'
import './logementPage.scss'
import LogementHeader from '../../components/logement-header/LogementHeader.jsx'
import Accordion from "../../components/accordion/Accordion.jsx";

const LogementPage = ({ logement }) => {
  console.log(logement)
  const { id, title, description, equipements, host, location, pictures, rating, tags } = logement
  return (
    <div className='logement__page'>
      <BannerSwiper images={pictures} />
      <section className='logement__page-content'>
        <LogementHeader title={title} location={location} host={host} tags={tags} rating={rating} />
        <Accordion title='Description' content={description} />
        <Accordion title='Description' content={description} />
      </section>
    </div>
  )
}

export default LogementPage