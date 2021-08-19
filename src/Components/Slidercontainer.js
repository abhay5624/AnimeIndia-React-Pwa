import React from "react";
import styled from "styled-components";
import { data } from "../data";
import Slides from "./Slides";
const Slidercontainer = () => {
  return (
    <Container>
      <Container2>
        {data.map((anime) => (
          <Slides anime={anime} />
        ))}
      </Container2>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  text-decoration: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Container2 = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Slidercontainer;
