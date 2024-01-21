import React from "react";

import "./Footer.scss";

const links = [
  { title: "Twitter", href: "#" },
  { title: "Discord", href: "#" },
  { title: "Contact us", href: "#" },
  { title: "Terms of use", href: "#" },
  { title: "Private policy", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__left__copyright">
          {new Date().getFullYear()}&nbsp;© Memecoin
        </p>
      </div>
      <div className="footer__right">
        {links.map((l) => {
          return (
            <a className="footer__right__link" href={l.href}>
              {l.title}
            </a>
          );
        })}
      </div>
    </footer>
  );
};
