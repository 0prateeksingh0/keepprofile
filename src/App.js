import React, { useState } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import photo1 from "./assets/photo1.JPG";
import photo2 from "./assets/photo2.JPG";
import photo3 from "./assets/photo3.JPG";
import photo4 from "./assets/photo4.JPG";

export default function AnniversaryPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleYesClick = () => setShowMessage(true);
  const handleNoClick = () => setNoClicked(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy Anniversary, Ishika Babu Dhotu! ❤️
      </motion.h1>

      <motion.p
        className="message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Every moment with you is special. I'm grateful to have you in my life. 
        Here's to many more years of love, laughter, and happiness together! 💕
      </motion.p>

      {!showMessage ? (
        <>
          <motion.div
            className="carousel-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Slider {...settings}>
              <div className="slide">
                <img src={photo1} alt="Photo 1" />
              </div>
              <div className="slide">
                <img src={photo2} alt="Photo 2" />
              </div>
              <div className="slide">
                <img src={photo3} alt="Photo 3" />
              </div>
              <div className="slide">
                <img src={photo4} alt="Photo 4" />
              </div>
            </Slider>
          </motion.div>

          {/* Animated Text */}
          <motion.h2
            className="love-text"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            I love you, you love me? 💖
          </motion.h2>

          {/* Buttons */}
          <div className="button-container">
            <button className="yes-button" onClick={handleYesClick}>Yes ❤️</button>
            <button className="no-button" onClick={handleNoClick}>{noClicked ? "Yes ❤️" : "No 😢"}</button>
          </div>
        </>
      ) : (
        <motion.div
          className="message-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Sorry Dudu, really sorry 😢. Main aage se nahi karunga, please mujhe maaf kar do.</p>
          <p>I really love you, like you yaar. Tera dominating nature, teri smile, teri eyes—sab kuch ❤️.</p>
          <p>Tu meri soniya, meri dudu, meri everything hai! Jab pehli baar mile the, mujhe teri honesty aur straight-forwardness pasand aayi thi. 🌸</p>
          <p>Main hamesha tujhe pyar karunga, kyunki tu hamesha mujhe support karti hai aur mujhse pyar karti hai. ❤️</p>
          <p>Bas ek hi baat bolni hai—*I LOVE YOU, DUDU!* 💖</p>
        </motion.div>
      )}
    </div>
  );
}
