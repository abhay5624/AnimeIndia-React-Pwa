import React from "react";
import styled from "styled-components";
import { useRef } from "react";
const Slides = ({ anime }) => {
  const firstSlide = useRef(null);

  let CurrentSlide;
  let lastSlide;

  const slideactiveHolder = (e) => {
    anime.active = true;
    CurrentSlide = e;

    lastSlide = CurrentSlide;
  };

  const sliscale = anime.active ? "1.2" : "1";

  const slistyl = {
    backgroundImage: "url(" + anime.img + ")",
  };

  return (
    <Slide style={slistyl} onClick={slideactiveHolder} ref={firstSlide}>
      <div className="cover">
        <h1>{anime.name}</h1>
        <p>{anime.about}</p>
      </div>
    </Slide>
  );
};
const Slide = styled.div`
  background-size: cover;
  width: 100vw;
  height: 400px;

  position: relative;

  .cover {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    background-color: #05050571;
    z-index: 1;
    pointer-events: none;
    h1 {
      color: white;
      text-align: center;
    }
    p {
      color: #ffdd8c;
      padding: 2rem;
    }
  }
`;
export default Slides;
