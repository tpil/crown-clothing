import styled from "styled-components";
import {
BaseBtn,
GoogleSignInBtn,
InvertedBtn
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  
  &:hover {
    ::-webkit-scrollbar-thumb {
      background: black;
    }
  }

  ${BaseBtn},
  ${GoogleSignInBtn},
  ${InvertedBtn} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.span`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Button = styled.button`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

/*
.cart-dropdown-container {



  

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: black;
    }
  }
}
*/
