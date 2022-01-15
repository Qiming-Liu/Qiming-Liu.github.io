import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">{`© ${new Date().getFullYear()} Qiming Liu`}</span>
  </footer>
);

export default Footer;
