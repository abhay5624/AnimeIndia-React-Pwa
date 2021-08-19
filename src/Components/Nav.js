import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
  return (
    <Navbar>
      <h1>
        <span>A</span>nime<span>I</span>ndia
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mylist">My List</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </Navbar>
  );
};
const Navbar = styled.nav`
  background-color: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "STIX Two Text", serif;
    font-weight: 700;
    font-size: 2rem;
  }
  h1:hover {
    color: #2f4858;
    span {
      color: white;
    }
  }
  ul {
    list-style: none;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
      width: 60%;
      justify-content: space-between;
      padding: 0%;
    }
    a {
      text-decoration: none;
      color: #2f4858;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
    }
    li:hover {
      transform: scale(1.5);
      a {
        color: white;
      }
    }
  }
  span {
    color: #2f4858;
  }
`;
export default Nav;
