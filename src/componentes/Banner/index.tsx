import React from "react";
import "./Banner.css";

interface BannerProps {
  endereçoImagem: string;
  textoAlternativa?: string;
}
const Banner = ({ endereçoImagem, textoAlternativa }: BannerProps) => {
  return (
    <header className="banner">
      <img src={endereçoImagem} alt={textoAlternativa}></img>
    </header>
  );
};
export default Banner;
