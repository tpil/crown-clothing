import styled from "styled-components";
import { ReactComponent as  ShoppingBagIcon} from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingBagIcon)`
width: 24px;
    height: 24px;
`;

export const CartIconContainer = styled.div`
 width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
position: absolute;
    font-size: 10px;
    font-weight: bold;
    top: 10px;
`