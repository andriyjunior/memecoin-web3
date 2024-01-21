import { motion } from "framer-motion";
import bigLogo from "../../assets/images/memecoin.png";
import { Button } from "../../components";

import "./Home.scss";

const basedTransition = { ease: "easeInOut", duration: 0.7 };

export const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <motion.h1
          initial={{ opacity: 0, y: "90px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: 0.2, ...basedTransition }}
          className="home__left__title"
        >
          MEMECOIN?
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: "90px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: 0.3, ...basedTransition }}
          className="home__left__description"
        >
          MEMECOIN (MEME) IS LITERALLY A MEME COIN. NO UTILITY. NO ROADMAP. NO
          PROMISES. NO EXPECTATION OF FINANCIAL RETURN. JUST 100% MEMES.
        </motion.h3>
        <motion.div
          className="home__left__button"
          initial={{ opacity: 0, y: "90px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: 0.4, ...basedTransition }}
        >
          <Button>Play to Earn</Button>
        </motion.div>
      </div>
      <div className="home__right">
        <motion.img
          initial={{ opacity: 0, y: "90px", scale: 0.9, rotateY: 120 }}
          animate={{ opacity: 1, y: "0px", scale: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="home__right__image"
          src={bigLogo}
          alt=""
        />
      </div>
    </div>
  );
};
