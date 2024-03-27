import { useState, useRef } from 'react';
import { Flex, Button, SliderTrack, Slider, SliderFilledTrack, Tooltip, SliderMark, SliderThumb, useToken, Skeleton, SkeletonCircle, SkeletonText, Input, Spacer, Box, Table, Thead, Tr, Th, Tbody, Td, Card, CardHeader, Heading, CardBody, Text} from '@chakra-ui/react';
import Image from "next/image";
import { keyframes } from '@chakra-ui/system';
import styled from '@emotion/styled';
import React from 'react';

const slideThrough = keyframes`
  0% {
    top: 0;
    background-color: white
  },
  45% {
    top: 45%;
    background-color: white
  }
  45.5% {
    top: 45.5%;
    background-color: green
  },
  100% {
    top: 100%;
    background-color: green

  }
`;

const slideEnd = keyframes`
0% {
    top: 0;
    background-color: white
  },
  45% {
    top: 45%;
    background-color: white
  }
  45.5% {
    top: 45.5%;
    background-color: red
  },
  100% {
    top: 100%;
    background-color: red
  }
`;

const BasicCard = styled(Card)`
width: 70%;
height: min-content;
position: absolute;
top: -1000px;
left: 15%;

padding: 20px;
background: white;
background-color: white;
`
export function DefaultCard() {
    return(<BasicCard 
    animation={`${slideThrough} 12s linear infinite`}>
        <SkeletonCircle size='8' />
        <SkeletonText mt='4' noOfLines={2} spacing='3' skeletonHeight='3' />
    </BasicCard>
    )
}
export function HappyCard() {
    return(
    <BasicCard 
    animation={`${slideEnd} 12s linear 4s infinite `}>
        <SkeletonCircle size='8' 
        // startColor='green.100' endColor='green.500'
        />
        <SkeletonText mt='4' noOfLines={2} spacing='3' skeletonHeight='3' />
    </BasicCard>
    )
}

export function SadCard() {
    return (
        <BasicCard

    animation={`${slideEnd} 12s linear 8s infinite `}>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
        </BasicCard>
    )
}

function SliderThumbWithTooltip({ sliderValue, setSliderValue }) {
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
      <Slider
        id='slider'
        size='lg'
        defaultValue={5}
        min={0}
        max={100}
        colorScheme='black'
        onChange={(val) => setSliderValue(val)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
          25%
        </SliderMark>
        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
          50%
        </SliderMark>
        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
          75%
        </SliderMark> */}
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='var(--safetykit-red)'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue} million daily requests`}
        >
          <SliderThumb boxSize={6}/>
        </Tooltip>
      </Slider>
    )
  }

export default function Qualify() {
    const [sliderValue, setSliderValue] = useState(5); 

    return (
        <Flex w="100%" height="100vh" maxHeight="100vh">
            <Flex direction="column" width="55%" justify="center" align="center">
                <Text lineHeight="1" fontSize='4xl' fontWeight="600" color="var(--safetykit-red)" marginBottom="2px">Try SafetyKit.</Text>
                <Text fontSize='4xl' fontWeight="600" >You could save</Text>
                <Text fontSize='6xl' lineHeight="1.8"  fontWeight="400">{sliderValue * 520} hours</Text>
                <Text fontSize='md' fontWeight="400">on content moderation every year.</Text>
                
                <Text fontSize='md' fontWeight="400" position="absolute" bottom="5px" color="gray">based on data from AirBnB, PayPal, and Substack</Text>
                <Box w="90%" height="min-content" marginLeft="5%" marginTop="1em">
                    <SliderThumbWithTooltip sliderValue={sliderValue} setSliderValue={setSliderValue}></SliderThumbWithTooltip>
                </Box>
                <br></br>
                <br></br>
            </Flex>
            <Box position="relative" width="45%" maxHeight="99vh" overflowY="hidden">
                <Card zIndex="2" bg="white" position="absolute" w="90%" marginLeft="5%" h="160px" top="calc(50% - 60px)" display="flex" justify="center" align="center">
                    <Image 
                    width={100}
                    height={27}
                    src="/safetykit_logo.webp"
                    alt="safetykit Logo"
                    />
                </Card>
                <DefaultCard></DefaultCard>
                <HappyCard></HappyCard>
                
                <SadCard></SadCard>
                <Box position="absolute" top="0" width="100%" backgroundImage="linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1),rgba(255, 255, 255, 0))" h="20vh">
                </Box>
                <Box position="absolute" bottom="0" width="100%" backgroundImage="linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))" h="20vh">
                </Box>
                <Button position="absolute" top="1em" right="1em" >Book a demo</Button>
            </Box>
        </Flex>
    )
}