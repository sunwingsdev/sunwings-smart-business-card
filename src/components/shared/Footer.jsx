import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <p>
          Copyright © 2024 | <Link to="/">Sun Wings Smart Business Card</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
