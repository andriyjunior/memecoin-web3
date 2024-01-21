import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { Button } from "../button";
import { useMetamaskConnection } from "../../hooks";
import { shortenAddress } from "../../utilities/addreses";

import "./Header.scss";

const links = [
  {
    title: "Airdrop",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#",
  },
  {
    title: "Investors",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
];

export const Header = () => {
  const [opened, setOpened] = useState(false);

  const { account, connect } = useMetamaskConnection();

  const handleTrigger = () => setOpened((st) => !st);
  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);

  const handleConnectionToMetamask = () => {
    connect();
  };

  return (
    <header className="header">
      <a className="logo" href="#">
        <img className="logo__image" src={logo} alt="logo" />
        <h3 className="logo__text">Memecoin</h3>
      </a>
      <div className="header__links">
        {links.map((l) => (
          <a key={l.title} href={l.href}>
            {l.title}
          </a>
        ))}
      </div>

      {account ? (
        <p className="header__account">{shortenAddress(account)}</p>
      ) : (
        <div className="header__button">
          <Button variant="outlined" onClick={handleConnectionToMetamask}>
            Connect to metamask
          </Button>
        </div>
      )}

      <button className="header__humburger" onClick={handleTrigger}>
        <span className="header__humburger__line" />
        <span className="header__humburger__line" />
        <span className="header__humburger__line" />
      </button>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="menu"
        >
          <div className="menu__links">
            {links.map((l) => (
              <a key={l.title} href={l.href}>
                {l.title}
              </a>
            ))}
            <div className="menu__button">
              <Button>Connect to metamask</Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
