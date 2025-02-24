import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

const Button = () => {
    const navigate = useNavigate()
  return (
    <StyledWrapper>
      <button className="btn"
      onClick={() => navigate("/about")}>Learn More!</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: .8em 3em;
    display: inline-block;
    cursor: pointer;
    border-radius: 6em;
    transition: all 0.2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: white;
    background-color: #0D1127;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn::after {
    background-color: #fff;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }`;

export default Button;
