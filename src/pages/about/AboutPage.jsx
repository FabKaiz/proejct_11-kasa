import './aboutPage.scss'
import BannerImage from '../../components/banner-image/BannerImage.jsx'
import BannerImg from '/assets/about-banner.png?url'
import Accordion from '../../components/accordion/Accordion.jsx'

const AboutPage = () => {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum.`

  return (
    <div className='about'>
      <BannerImage img={BannerImg} />
      <section className='accordions_container'>
        <Accordion title='Fiabilité' content={description} />
        <Accordion title='Respect' content={description} />
        <Accordion title='Service' content={description} />
        <Accordion title='Sécurité' content={description} />
      </section>
    </div>
  )
}

export default AboutPage