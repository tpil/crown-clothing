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

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover ${NavLinkBorder} {
    width: 100%;
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

// @import "../../assets/styles/breakpoints.scss";

// .navigation {
//   height: 70px;
//   display: flex;
//   justify-content: space-between;
//   margin: 10px;
//   flex: 1 1 0;

//   .logo-container {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .nav-links-container {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       display: flex;
//       flex-direction: column;
//       padding: 10px;
//       cursor: pointer;
//       transition: all .5s;

//       .nav-link-border {
//         width: 0%;
//         background-color: black;
//         height: 1px;
//         transition: all .3s;
//       }

//       &:hover {
//         .nav-link-border {
//           width: 100%;
//         }
//       }
//     }
//   }
// }
// .nav-dropdown {
//   height: 0;
//   position: relative;
//   z-index: 5;
//   right: 10px;
//   bottom: 10px;
//   display: flex;
//   justify-content: flex-end;
// }
