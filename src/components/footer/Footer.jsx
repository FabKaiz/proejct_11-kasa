import './footer.scss';
import LogoWhite from '/assets/logo-white.png?url';

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={LogoWhite} alt="Brand logo" />
      </div>
      <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;