import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled';
import React from 'react';

// DESCRIPTION: This component allows you to have content on the left side of the page (ContentLeft)
// while rendering a demo on the right (DemoRight). For example, ContentLeft may contain a form and
// DemoRight may contain a live rendering of how the current form contents affect something else.

// Main styles for parent component
const StyledComponent = styled(Box)`
//   &:hover {
//     background: lightgrey;
//     cursor: pointer;
//   }
  width: 98%;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: auto;
  margin-top: 2em;
  margin-bottom: 6em;


  @media screen and (max-width: 720px) {
    width: 98%;
    flex-direction: column;
  }
`;

// ContentLeft styles
const ContentLeftComponent = styled(Box)`
  width: 55%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px; 
  box-sizing: content-box;

  padding-right: 3em;
  display: flex;

  margin: auto;

  @media screen and (max-width: 720px) {
    width: 98%;
    padding-right: 0;
  }

`;

// DemoRight styles
const DemoRightComponent = styled(Box)`
    width: 45%;
    max-height: 100%;    
    margin: auto;

    @media screen and (max-width: 720px) {
        width: 98%;
        padding-right: 0;
    }
`

function ContentLeft({ children }) {
    return <ContentLeftComponent>{ children }</ContentLeftComponent>
}

function DemoRight({ children }) {
    return <DemoRightComponent>{ children }</DemoRightComponent>
}

// Takes exactly TWO children, contentLeft, then DemoRight
export default function ContentDemo({ children }) {
    const childArray = React.Children.toArray(children);

    // Assign children to specific components
    const contentLeftChild = childArray[0] ? <ContentLeft>{childArray[0]}</ContentLeft> : null;
    const demoRightChild = childArray[1] ? <DemoRight>{childArray[1]}</DemoRight> : null;

    return (
    <StyledComponent id="two-part-spread">
        {contentLeftChild}
        {demoRightChild}
    </StyledComponent>
    )
}