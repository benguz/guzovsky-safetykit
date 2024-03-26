import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled';

const StyledComponent = styled(Box)`
//   &:hover {
//     background: lightgrey;
//     cursor: pointer;
//   }
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  margin-top: 2em;
  margin-bottom: 6em;

  @media screen and (max-width: 720px) {
    width: 98%;
  }
`;

export default function Responsive({ children }) {
    return <StyledComponent id="responsive-mobile-body">{ children }</StyledComponent>
}