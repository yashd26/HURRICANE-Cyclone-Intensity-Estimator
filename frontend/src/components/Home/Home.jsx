import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Info,
  Margin,
  Buttons,
  ReadMoreBtn,
  Globe,
  ExploreBtn,
} from "./styles";
import globeImg from "../../assets/images/globe.png";

const Home = () => {
  return (
    <Container>
      <Content>
        <Info>
          <h2>Tropical Cyclone</h2>
          <Margin />
          <h1>Estimator</h1>
          <p>
            <span>Deep Learning-Based Hurricane Intensity Estimator.</span>{" "}
            Applying machine learning to objectively estimate tropical cyclone
            intensity.
          </p>
          <Buttons>
            <Link style={{ textDecoration: "none" }} to="/explore">
              <ExploreBtn>Explore</ExploreBtn>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/read_more"><ReadMoreBtn>Read More</ReadMoreBtn></Link>
          </Buttons>
        </Info>
        <Globe>
          <img src={globeImg} alt="" />
        </Globe>
      </Content>
    </Container>
  );
};

export default Home;
