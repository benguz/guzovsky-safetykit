'use client'

import React, { useEffect, useState } from 'react';
import { Flex, Input, Spacer, Box, Table, Thead, Tr, Th, Tbody, Td, Card, CardHeader, Heading, CardBody, Text} from '@chakra-ui/react';
import Image from "next/image";
import styles from "../page.module.css";
import CopyPasteElement  from '@/components/copypaste';
import Qualify  from '@/components/qualifying';

export default function Users() {
    return (
        <>
        <Flex id="dashboard-container" h="100vh">
            <Flex direction="column" w="55%" padding='1em' id="leftColumn"  spacing="4">
                <Flex id="topStats" justifyContent="space-between" alignItems="center" margin="10px 0px 10px 0px">
                    <Card padding="20px">
                        <CardBody>
                        Example
                        </CardBody>
                    </Card>
                    <Card padding="20px">
                        <CardBody>
                        Example
                        </CardBody>
                    </Card><Card padding="20px">
                        <CardBody>
                        Example
                        </CardBody>
                    </Card>
                </Flex>
                <Card variant='elevated'>
                    <CardHeader paddingBottom="8px">
                        <Heading size='md'>Yonka honka</Heading>
                        <Image
                        src="/safetykit_logo.webp"
                        alt="SafetyKit Logo"
                        width={100}
                        height={27}
                        priority
                        />
                    </CardHeader>
                        <CardBody paddingTop="8px">
                            <Text>Summary lorem ipsum</Text>

                        </CardBody>
                    
                </Card>
                <CopyPasteElement>
                    <Text>Testing how the text moves around the input field Testing how the text moves around the input field</Text>
                    <Text>Hello? <strong>see? bold text!</strong></Text>

                </CopyPasteElement>
                
            </Flex>
            <Flex direction="column" w='45%' h="100%" padding='1em'  id="RightColumn">
            <Card variant='elevated' w='100%' h='80%' backgroundImage='var(--safetykit-gradient)' marginBottom="20px" display='flex' alignItems="center" justify="center">
                <Image 
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority/>
              </Card>
              <Input
                    variant="outline"
                    placeholder="Select Date and Time"
                    size="md"
                    type="file"
                />
            </Flex>
            

        </Flex>
        <Qualify></Qualify>
        </>
    )
}