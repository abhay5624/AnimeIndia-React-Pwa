import React from "react";
import styled from "styled-components";
import Slidercontainer from "../Components/Slidercontainer";
import { useState, useEffect } from "react";
import axios from "axios";
import LatestContainer from "../Components/LatestContainer";
const Home = () => {
  const [animedata, setanimedata] = useState(null);
  const options = {
    method: "GET",
    url: "https://simpleanime.p.rapidapi.com/anime/list/recent",
    headers: {
      "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
      "x-rapidapi-host": "simpleanime.p.rapidapi.com",
    },
  };

  const AnimeData = () => {
    const data = axios
      .request(options)
      .then(function (response) {
        setanimedata(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    AnimeData();
    console.log(animedata);
  }, []);

  return (
    <Homestyle>
      <Slidercontainer />
      <LatestContainer animes={animedata} />
    </Homestyle>
  );
};
const Homestyle = styled.div`
  overflow: hidden;
  text-decoration: none;
`;

export default Home;
