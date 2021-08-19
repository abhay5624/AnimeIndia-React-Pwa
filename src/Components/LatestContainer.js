import React from "react";
import Latest from "./Latest";
import styled from "styled-components";
const LatestContainer = ({ animes }) => {
  return (
    <Container>
      <h1>Latest Anime</h1>
      {animes && animes.map((detail) => <Latest detail={detail} />)}
    </Container>
  );
};
const Container = styled.div`
  display: flex;

  flex-direction: column;
  text-decoration: none;
`;
export default LatestContainer;
