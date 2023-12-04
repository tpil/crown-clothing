//@import "../../assets/styles/breakpoints.scss";

import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.1);
  transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: ${(props) => `url(${props.imageUrlProp})`};
`;

export const DirectoryItemBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: all 0.8s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  margin: 10px;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1);
    }

    & ${DirectoryItemBodyContainer} {
      opacity: 0.9;
      transform: scale(1.2);
    }
  }
`;

/*
.directory-item-container {
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  margin: 10px;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1);
    }

    & .directory-item-body-container {
      opacity: 0.9;
      transform: scale(1.2);
    }
  }
}
*/
