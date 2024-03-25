'use client'

import Image from "next/image";
import styles from "../page.module.css";
import { Button, Textarea, VStack, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import Responsive  from '@/components/responsive';


export default function FormPage() {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  // State to track validation for each input
  const [validationErrors, setValidationErrors] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.style.height = (e.target.scrollHeight) + 1 +  "px";

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setValidationErrors((prev) => ({
      ...prev,
      [name]: !value.includes('chocolate'),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace the URL with your API endpoint
    const apiEndpoint = 'YOUR_API_ENDPOINT';
    console.log(formData)
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if(response.ok) {
      const data = await response.json();
      console.log(data); // Process the response data as needed
    } else {
      console.error('API call failed');
    }
  };

  const renderTextarea = (name) => (
    <>
      <Textarea
        placeholder={`Input ${name.charAt(5)}`}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onBlur={handleValidation}
        borderColor={validationErrors[name] ? 'red.500' : 'gray.200'}
        resize="None"
      />    
        <Text fontSize="sm" textAlign="left" marginTop="4px" marginBottom="16px" w="100%" color={validationErrors[name] ? ("red.500") : ("gray.200")} animation="colorChange 1s ease">
          This input must contain &apos;chocolate&apos;
        </Text>
      
    </>
  );

  const formQuestionStyle = {
    fontSize: 'lg',
    fontWeight: '500',
    textAlign: 'left',
    w: '100%',
  };

  return (
    <Responsive>
        <Text fontSize='4xl' fontWeight="600">Form Title</Text>
        <VStack as="form" onSubmit={handleSubmit} spacing={0} width="100%">
            <Text sx={formQuestionStyle}>Question one</Text>
            {renderTextarea('input1')}
            <Text sx={formQuestionStyle}>Question two</Text>
            {renderTextarea('input2')}
            <Text sx={formQuestionStyle}>Question three</Text>
            {renderTextarea('input3')}
            <Text sx={formQuestionStyle}>Question four</Text>
            {renderTextarea('input4')}
        <Button type="submit">Submit</Button>
        </VStack>
    </Responsive>
  );
}
