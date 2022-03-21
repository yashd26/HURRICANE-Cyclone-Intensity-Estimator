import styled from "styled-components";

export const MControls = styled.div`
  position: absolute;
  background-color: rgba(0, 25, 42,0.95);
  width: 250px;
  height: 400px;
  margin-top: 80px;
  margin-left: 10px;
  border-radius: 5px;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 0 1rem;

  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const Title = styled.p`
  color: rgb(119, 119, 119);
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 10px;
`;

export const Season = styled.a`
  display: block;
  text-decoration: none;
  color: rgb(235, 235, 235);
  font-size: 16px;
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  line-height: 20px;
  cursor:pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: rgb(235, 235, 235);
    color: rgb(0, 35, 58);
    font-weight: bold;
  }
`;

export const Margin = styled.div`
  width: 220px;
  height: 1px;
  background-color: rgb(99, 99, 99);
`;

export const Input = styled.input`
  margin-bottom:10px;
  width: 220px;
  height:40px;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: rgb(0, 51, 85);
  border: 2px solid rgb(0, 35, 58);
  letter-spacing:1px;
  color:#fff

`;

export const ControlsMenu = styled.div`
  position: absolute;
  background-color: rgba(0, 25, 42,0.95);
  width: 250px;
  height: 400px;
  margin-top: 40px;
  border-radius: 5px;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 0 1rem;
  display: none;

  @media screen and (max-width: 710px) {
    display: block;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  margin-top: 80px;
  margin-left: 10px;
`;

export const Btn = styled.div`
  background-color: rgb(0, 25, 42);
  border-radius: 5px;
  cursor: pointer;
  display: none;

  img {
    width: 20px;
    margin: 7px 10px 2px;
  }

  @media screen and (max-width: 710px) {
    display: block;
  }
`;
