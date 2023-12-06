import styled from "styled-components";
import  GoogleLogo  from "../../assets/google-icon.svg";

export const BaseBtn = styled.button`
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  line-height: 20px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInBtn = styled(BaseBtn)`
  &:hover {
    color: #4285f4;
    background-color: white;
    border: 1px solid #4285f4;
  }
`;

export const InvertedBtn = styled(BaseBtn)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GoogleLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;

  GoogleLogo {
    width: 25px;
    height: 25px;
  }
`;

export const Logo = styled.div`
  background:  no-repeat center url(${GoogleLogo});
  width: 25px;
  height: 25px;
`;
/*
.button-container {
  

  

  &.google-sign-in {
   
    &:hover {
      color: #4285f4;
      background-color: white;
      border: 1px solid #4285f4;
    }

    .google-logo {
      display: flex;
      align-items: center;
      margin-left: 5px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    
  }

  &.inverted {
   
  }
}
*/
