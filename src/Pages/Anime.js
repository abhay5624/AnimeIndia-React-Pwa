import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Anime = ({ match }) => {
  const [animedata, setanimedata] = useState(null);
  const [animeepisode, setanimeepisode] = useState(null);
  const options = {
    method: "GET",
    url: `https://simpleanime.p.rapidapi.com/anime/info/videos/${match.params.any}`,
    headers: {
      "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
      "x-rapidapi-host": "simpleanime.p.rapidapi.com",
    },
  };

  const AnimDetail = async () => {
    const data = await axios
      .request(options)
      .then(function (response) {
        const data1 = response;
        setanimedata(data1.data.data[0]);
        setanimeepisode(data1.data.episode);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(match.params.any);
  useEffect(() => {
    AnimDetail();
    console.log(animeepisode);
  }, [match.params.any]);
  return (
    <SearchAnime>
      {animedata && (
        <>
          <h1>{animedata.title2}</h1>
          <Flexbox>
            <div>
              {animeepisode && <img src={animeepisode[0].cover} alt="" />}
            </div>
            <div>
              <p>{animedata.description}</p>
              <p>
                <strong>Episode:</strong> {animedata.title}
              </p>
              <Downloadandwatchcontainer>
                <a href={animedata.download}>
                  <Download>Download</Download>
                </a>
                <a href={animedata.stream}>
                  <Watch>Watch Online</Watch>
                </a>
              </Downloadandwatchcontainer>
            </div>
          </Flexbox>
          <h3>Episode List</h3>
          <ul>
            {animeepisode &&
              animeepisode.map((ep) => (
                <Link to={`/vid_id/${ep.vid_id}`}>
                  <li>
                    <h3>{ep.episode}</h3>
                    <p>{ep.date}</p>
                    <p>
                      <strong>SUB:</strong>
                      {ep.type === "SUB" ? "Yes" : "NO"}
                    </p>
                  </li>
                </Link>
              ))}
          </ul>
        </>
      )}
    </SearchAnime>
  );
};
const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Downloadandwatchcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Download = styled.button`
  padding: 1rem 2rem;
  color: white;
  background-color: #2f4858;
  border-radius: 5px;
  border: none;
`;
const Watch = styled(Download)`
  background-color: #1c6fa3;
`;
const SearchAnime = styled.div`
  h1 {
    text-align: center;
  }
  img {
    @media only screen and (max-width: 1200px) {
      width: 80%;
      margin-left: 10%;
      border-radius: 5px;
      padding: 0rem;
    }
    width: 400px;
    height: 400px;

    padding: 2rem;
    border-radius: 15px;
  }
  a {
    text-decoration: none;
  }
  p {
    padding: 1rem;
  }
  ul {
    list-style: none;
    text-decoration: none;
  }
  li {
    color: #2f4858;
    p {
      padding: 0rem;
    }
  }
`;
export default Anime;
