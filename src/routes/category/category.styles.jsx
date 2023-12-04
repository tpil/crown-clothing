import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/breakpoints';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (min-width: ${breakpoints.phone}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
`;
