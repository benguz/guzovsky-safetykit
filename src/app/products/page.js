'use client'

import React, { useEffect, useState } from 'react';
import { Flex, Button, Spacer, Box, Input, Table, Thead, Tr, Th, Tbody, Td, Card, CardHeader, Heading, CardBody, Text} from '@chakra-ui/react';
import Image from "next/image";
import styles from "../page.module.css";


function DetailComponent({ displayListing }) {
    const [currentImage, setCurrentImage] = useState(0);

    const imagesComponent = displayListing && Array.isArray(displayListing.images) ? (
        <Text
            width={300}
            height={100}
            alt="safetykit logo"
        > fdsfkds
        /
          </Text>
        // displayListing.images.map((image, index) => (
        
        //   <Image
        //     key={index} // Consider using a unique property of `image` if available
        //     src={"/safetykit_logo.webp"}
        //     width={300}
        //     style={{ display: (index === currentImage ? "block" : "none")}}
        //     height={100}
        //     alt="safetykit logo"
        //   />
        // ))
      ) : (
        <p>No images available.</p> // Or any other fallback content
      );
      
    return (
        <Card w="100%" margin="10px" >
            {
            <Text>{displayListing.title}</Text>
            }
            <Box>{imagesComponent}</Box> 
            <Button></Button>
            <Card>
                {
                    <Text>{displayListing.url} {displayListing.price}</Text>
                }
            </Card>
        </Card>
    )
}

export default function Users() {
    const [listings, setListings] = useState([]);
    const [displayListing, setDisplayListing] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("Wholesale");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const pageSize = 10;

    
    useEffect(() => {
        const fetchListings = async () => {
          try {
            const offset = (pageNumber - 1) * pageSize;
            const response = await fetch(`/api/listings?pageSize=10&offset=${offset}&q=${search}`);
            const data = await response.json();
            setListings(data);
            setLoading(false);
            if (data.length > 0) setDisplayListing(data[0]);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchListings();
      }, [pageNumber, search]);

    return (<Flex h="100vh">
        <Flex id="table-container" w="60%" h="100%" direction="column">
            <Input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."/>
        <Table variant="simple">
                    <Thead>
                        <Tr>
                        <Th>title</Th>
                        <Th>price</Th>
                        <Th>seller</Th>
                        <Th>url</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {listings.map((listing) => (
                        <Tr key={listing.title} onClick={() => setDisplayListing(listing)}>
                            <Td>{listing.title}</Td>
                            <Td>{listing.price}</Td>
                            <Td>{listing.seller}</Td>
                            <Td>{listing.url}</Td>
                        </Tr>
                        ))}
                    </Tbody>
                    
                    </Table>
                    <Flex>
                    <Button onClick={() => setPageNumber((prevPageNumber) => Math.max(0, prevPageNumber - 1))}>Prevpage</Button>

<Button onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}>NextPage</Button>
                    </Flex>
                    
        </Flex>
        <Flex id="img-view" w="40%" h="100%" direction="column">
            {
                displayListing && <DetailComponent displayListing={displayListing}>

                </DetailComponent>
            }
           
        </Flex>
    </Flex>
    )
}