import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  flex: 1 1 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinkBorder = styled.span`
  width: 0%;
  background-color: black;
  height: 1px;
  transition: all 0.3s;
`;

export const SignOut = styled.div`
  display: flex;
  flex-direction: column;

  span + span {
    transform: translate(0, 20px);
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s 0.3s
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover ${NavLinkBorder} {
    width: 100%;
  }
  &:hover ${SignOut} {
    span {
    opacity: 1;
    }
    span + span {
      opacity: 1;
    }
  }
`;

export const NavDropdown = styled.div`
  height: 0;
  position: relative;
  z-index: 5;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;
