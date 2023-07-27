import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Center, Flex, Image, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SingleRestaurant = () => {
  const { category } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        setRestaurantData(res?.data?.meals[0]);
      })
      .catch((err) => console.error('Error fetching restaurant data', err));
  }, [category]);

  if (!restaurantData) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  // Destructure the restaurantData object for easy access to its properties
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube, strSource } = restaurantData;

  return (
    <>
      <Navbar/>
      <Box p={4}>
        <Flex direction="column" alignItems="center" p={4} bg={bgColor} rounded="md">
          <Image src={strMealThumb} alt={strMeal} boxSize="150px" rounded="full" mb={4} objectFit="cover" />
          <Text fontWeight="bold" fontSize="lg">
            {strMeal}
          </Text>
          <Text mt={2} fontSize="sm">
            Category: {strCategory}
          </Text>
          <Text mt={2} fontSize="sm">
            Area: {strArea}
          </Text>
          <Text mt={4} fontSize="md" textAlign="center">
            {strInstructions}
          </Text>
          {strYoutube && (
            <Text mt={4} fontSize="sm" textAlign="center">
              Watch on YouTube: <a href={strYoutube} target="_blank" rel="noopener noreferrer">{strMeal}</a>
            </Text>
          )}
          {strSource && (
            <Text mt={2} fontSize="sm" textAlign="center">
              Source: <a href={strSource} target="_blank" rel="noopener noreferrer">{strMeal}</a>
            </Text>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SingleRestaurant;
