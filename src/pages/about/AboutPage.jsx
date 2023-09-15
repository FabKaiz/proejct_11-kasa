import "./aboutPage.scss";
import BannerImage from "../../components/banner-image/BannerImage.jsx";
import BannerImg from '/assets/about-banner.png?url';
import Accordion from "../../components/accordion/Accordion.jsx";

const AboutPage = () => {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? `
  return (
    <div className='about'>
      <BannerImage img={BannerImg} />
      <div className="accordions_container">
        <Accordion title='Fiabilité' content={description} />
        <Accordion title='Respect' content={description} />
        <Accordion title='Service' content={description} />
        <Accordion title='Sécurité' content={description} />
      </div>
    </div>
  );
};

export default AboutPage;