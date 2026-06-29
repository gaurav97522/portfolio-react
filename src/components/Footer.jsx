import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Gaurav Vishwakarma</span>
        <span className="footer-muted">Built with ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
