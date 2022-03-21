import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 25, 42,0.922)),
    url(${bg});
  height: calc(100vh - 4rem);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 150px;
  width: 100%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 70px;
  }
`;

export const Info = styled.div`
  margin-bottom: 30px;

  h2 {
    color: rgb(138, 138, 138);
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  h1 {
    color: rgb(226, 226, 226);
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 10px;
    font-weight: 500;
    margin-bottom: 25px;
    line-height: 10px;
  }

  p {
    color: rgb(170, 170, 170);
    font-size: 1rem;
    line-height: 25px;
    margin-bottom: 30px;
    opacity: 0.8;
    width: 80vw;
  }

  span {
    font-weight: bold;
    color: rgb(224, 224, 224);
  }

  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    margin-bottom: 200px;

    p {
      width: 29vw;
    }

    h2 {
      font-size: 1rem;
      line-height: 10px;
    }

    h1 {
      font-size: 4rem;
      line-height: 10px;
      margin-bottom: 20px;
    }
  }
`;

export const Margin = styled.div`
  width: 250px;
  height: 1px;
  background: rgb(97, 97, 97);
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;

  @media screen and (min-width: 992px) {
    margin-left: 0;
  }
`;

export const Buttons = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

export const ExploreBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  background: rgb(224, 224, 224);
  color: rgb(0, 25, 42);
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  transition: 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
    margin-right: 20px;
    width: 140px;
  }
`;

export const ReadMoreBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(224, 224, 224);
  background: rgb(0, 54, 90);
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  transition: 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
    margin-right: 20px;
    width: 140px;
  }
`;

export const Globe = styled.div`
  display: none;

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  @media screen and (min-width: 992px) {
    display: block;
    width: 100%;
    max-width: 800px;
  }
`;
