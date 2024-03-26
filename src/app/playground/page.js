'use client'

import React, { useEffect, useState } from 'react';
import { Flex, Spacer, Box, Table, Thead, Tr, Th, Tbody, Td, Card, CardHeader, Heading, CardBody, Text} from '@chakra-ui/react';
import Image from "next/image";
import styles from "../page.module.css";

export default function Users() {
    return (
        <Flex id="dashboard-container" h="100vh">
            <Flex direction="column" w="55%" padding='1em' id="leftColumn"  spacing="4">
                <Flex id="topStats" justifyContent="space-between" alignItems="center" margin="10px 0px 10px 0px">
                    <Card padding="30px">
                        <CardBody>
                        Example
                        </CardBody>
                    </Card>
                    <Card padding="30px">
                        <CardBody>
                        Example
                        </CardBody>
                    </Card><Card padding="30px">
                        <CardBody>
                        Example
                        </CardBody>
                    </Card>
                </Flex>
                <Card variant='elevated'>
                    <CardHeader paddingBottom="8px">
                        <Heading size='md'>Yonka honka</Heading>
                    </CardHeader>
                        <CardBody paddingTop="8px">
                            <Text>Summary lorem ipsum</Text>
                        </CardBody>
                    
                </Card>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* {users.map((user) => (
                        <Tr key={user.id}>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                        </Tr>
                        ))} */}
                    </Tbody>
                    </Table>
            </Flex>
            <Flex direction="column" w='45%' h="100%" padding='1em'  id="RightColumn">
            <Card variant='elevated' w='100%' h='100%' display='flex' alignItems="center" justify="center">
                <Image 
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority/>
              </Card>
            </Flex>
            

        </Flex>
    )
}