import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: rgb(0, 25, 42);
`;

export const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  color: rgb(216, 216, 216);
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: rgb(0, 77, 179);
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: rgb(224, 224, 224);
  margin-left: 20px;
`;
