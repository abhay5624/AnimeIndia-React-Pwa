import React from "react";
import styled from "styled-components";
import Favicon from "../Img/favicon.png";
const Footer = () => {
  return (
    <Stylefooter>
      <Animeindiasection>
        <img src={Favicon} alt="" />
        <div>
          <h1>AnimeIndia</h1>
          <p>&copy;AnimeIndia.netlify.app</p>
        </div>
      </Animeindiasection>
      <div>
        <Formstyle>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" placeholder="Your Name......" id="name" required />
          <label htmlFor="email"> Enter your email</label>
          <input
            type="email"
            placeholder="Your Email"
            pattern=".+@gmail\.com"
            size="30"
            required
            id="email"
          />
          <label htmlFor="msgtxt"> Enter your massage</label>
          <textarea
            name="massage"
            id=""
            cols="30"
            rows="10"
            id="msgtxt"
            required
          >
            Enter your msg
          </textarea>
          <input type="submit" value="submit" id="submitbutton" />
        </Formstyle>
      </div>
    </Stylefooter>
  );
};
const Stylefooter = styled.footer`
  background-color: #2f4858;
  color: white;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Animeindiasection = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border-right: 2px white solid;
  margin: 4rem;
  order: 1;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin: 2rem;
    order: 2;
  }
  img {
    width: 70px;
    height: 70px;

    object-fit: cover;
  }
`;
const Formstyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  width: 100%;
  order: 2;
  @media only screen and (max-width: 1200px) {
    width: 90%;
    margin-left: 5%;
    order: 1;
  }
  label {
    font-family: "Poppins", sans-serif;
  }
  input {
    padding: 0.8rem 2rem;
    margin: 0.5rem 0rem;
    border-radius: 20px;
    border: none;
  }
  textarea {
    padding: 0.8rem 2rem;
    margin: 0.5rem 0rem;
    border-radius: 10px;
    border: none;
  }
  #submitbutton {
    border-radius: 5px;
    text-transform: capitalize;
    background-color: inherit;
    border: 1px white solid;
    color: white;
  }
`;
export default Footer;
