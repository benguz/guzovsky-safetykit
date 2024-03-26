'use client'
require('dotenv').config();

import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the users from the API
    const fetchUsers = async () => {
        try {
          const response = await fetch('/api/load');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUsers(data);
        } catch (e) {
          setError(e.message);
          console.error('Fetching users failed:', e);
        }
      };

    fetchUsers();
  }, []); // The empty array ensures this effect only runs once after the initial render

  if (error) {
    return <p>Error loading users: {error}</p>;
  }

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}