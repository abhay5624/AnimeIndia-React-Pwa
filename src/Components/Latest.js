import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Latest = ({ detail }) => {
  return (
    <>
      <Link to={"/vid_id/" + detail.vid_id}>
        <Anime>
          <img src={detail.cover} alt="" />
          <AnimeDetail>
            <h3>{detail.title}</h3>
            <p>{detail.date}</p>
          </AnimeDetail>
        </Anime>
      </Link>
    </>
  );
};
const Anime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  text-decoration: none;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: baseline;
    img {
      margin: 0%;
    }
  }

  img {
    width: 200px;
    margin: 2rem;
    border-radius: 5px;
  }
`;
const AnimeDetail = styled.div`
  color: #2f4858;
  text-decoration: none;
  h3 {
    text-decoration: none;
  }
`;
export default Latest;
