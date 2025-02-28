import React from "react";
import { Link } from "react-router-dom";
import FooterMin from "../FooterMin/FooterMin";
import corporate from "./assets/corporate.png";
import creative from "./assets/creative.png";
import dollar from "./assets/dollar.png";
import editorial from "./assets/editorial.png";
import ninja from "./assets/ninja.svg";
import shiruken from "./assets/shiruken.png";
import styles from "./Nontechnical.module.css";

function Nontechnical() {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${styles.corporatebg} uppercase mt-32 sm:mt-0`}
    >
      <div className="grid grid-cols-1 grid-rows-4  sm:grid-cols-3 sm:grid-rows-2 gap-y-12 sm:gap-y-20 md:gap-20 lg:gap-x-60 lg:gap-y-36">
        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white font-semibold ${styles.reveal}`}
        >
          <Link to="/nontechnical/editorial">
            <img className=" w-32" src={editorial} alt="" />
            <p className="mt-4">EDITORIAL</p>
          </Link>
        </div>

        <div className="row-span-2 justify-self-center self-center hidden sm:flex">
          <img src={ninja} alt="" className={`h-40 ${styles.flip}`} />
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white sm:hidden font-semibold ${styles.reveal1}`}
        >
          <Link to="/nontechnical/corporate">
            <img src={corporate} alt="" />
            <p>CORPORATE</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white hidden sm:grid font-semibold ${styles.reveal2}`}
        >
          <Link to="/nontechnical/corporate">
            <img src={corporate} alt="" />
            <p>CORPORATE</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white sm:hidden font-semibold ${styles.reveal2}`}
        >
          <Link to="/nontechnical/creatives">
            <img src={creative} alt="" />
            <p>CREATIVES</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white hidden sm:grid font-semibold ${styles.reveal1}`}
        >
          <Link to="/nontechnical/creatives">
            <img src={creative} alt="" />
            <p>CREATIVES</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-2xl text-white font-semibold ${styles.reveal3}`}
        >
          <Link to="/nontechnical/sponsorship">
            <img src={dollar} alt="" />
            <p className="mt-4">SPONSORSHIP</p>
          </Link>
        </div>
      </div>

      <img
        className={`absolute hidden h-16 w-16  md:flex opacity-0 top-32 left-40 ${styles.star1}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 bottom-32 left-40 ${styles.star2}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 top-32 right-40 ${styles.star3}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 bottom-32 right-40 ${styles.star4}`}
        src={shiruken}
        alt=""
      />
      <FooterMin classNames="py-6 sm:py-0 sm:absolute sm:bottom-6" />
    </div>
  );
}

export default Nontechnical;
