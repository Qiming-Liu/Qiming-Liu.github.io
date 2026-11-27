import Link from 'components/Link';
import { socialLinks } from 'app/config';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">{`© ${new Date().getFullYear()} Qiming Liu`}</span>
    {socialLinks.map(({ label, url }) => (
      <Link secondary className="footer__link" href={url} key={label}>
        {label}
      </Link>
    ))}
    <Link
      secondary
      className="footer__link"
      href="https://github.com/Qiming-Liu/Qiming-Liu.github.io"
    >
      Source
    </Link>
  </footer>
);

export default Footer;
