"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@root/assets/burger.jpg";
import curryImg from "@root/assets/curry.jpg";
import dumplingsImg from "@root/assets/dumplings.jpg";
import macncheeseImg from "@root/assets/macncheese.jpg";
import pizzaImg from "@root/assets/pizza.jpg";
import schnitzelImg from "@root/assets/schnitzel.jpg";
import tomatoSaladImg from "@root/assets/tomato-salad.jpg";
import classes from "./image-slideshow.module.css";
import exp from "constants";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
