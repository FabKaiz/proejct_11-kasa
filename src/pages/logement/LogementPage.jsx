import './logementPage.scss'
import LogementHeader from '../../components/logement-header/LogementHeader.jsx'
import Accordion from "../../components/accordion/Accordion.jsx";
import Carousel from "../../components/banner-carousel/Carousel.jsx";

const LogementPage = ({ logement }) => {
  console.log(logement)
  const { title, description, equipments, host, location, pictures, rating, tags } = logement

  const equipmentsList = equipments.map((equipment, i) => {
    return (
      <li key={i}>{equipment}</li>
    )
  })

  return (
    <div className='logement__page'>
      <Carousel images={pictures} />
      <section className='logement__page-content'>
        <LogementHeader title={title} location={location} host={host} tags={tags} rating={rating} />
        <div className="accordions_container">
          <Accordion title='Description' content={description} />
          <Accordion title='Équipements' content={equipmentsList} />
        </div>
      </section>
    </div>
  )
}

export default LogementPage