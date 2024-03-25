import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled';

const StyledComponent = styled(Box)`
//   &:hover {
//     background: lightgrey;
//     cursor: pointer;
//   }
  width: 55%;

  
  }
`;

export default function Responsive({ children }) {
    return <StyledComponent>{ children }</StyledComponent>
}