import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Flex, Image, Text, Grid, GridItem, useColorModeValue, Spinner, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Restaurant() {
  const [data, setData] = useState({
    isLoading: false,
    restaurants: [],
    isError: false
  });

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const hoverColor = useColorModeValue('gray.200', 'gray.600');
  
  // get function-
  const getFunction = () => {
    setData({...data, isLoading: true});
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setData({...data, restaurants: res?.data?.categories, isLoading: false});
      })
      .catch((err) => setData({...data, isLoading: false}))
  }

  useEffect(() => {
    getFunction();
  }, [])

  console.log(data);

  if (!data?.restaurants) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }
  
  return (
    <>
      <Navbar/>
      <Box p={4}>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={4}>
          {data?.restaurants?.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.strCategory}`} key={restaurant.idCategory}>
              <GridItem key={restaurant.idCategory}>
                <Flex direction="column" alignItems="center" p={4} bg={bgColor} rounded="md" transition="background-color 0.3s">
                  <Box
                    as="a"
                    href={`#restaurant/${restaurant.idCategory}`}
                    _hover={{ textDecoration: 'none', bg: hoverColor }}
                  >
                    {
                      !data?.isLoading ? <Image
                      src={restaurant.strCategoryThumb}
                      alt={restaurant.strCategory}
                      boxSize="150px"
                      rounded="full"
                      mb={4}
                      objectFit="cover"
                    /> : <Spinner/>  
                    }
                    <Text fontWeight="bold" fontSize="lg">
                      {restaurant.strCategory}
                    </Text>
                    <Text mt={2} fontSize="sm" textAlign="center">
                      {restaurant.strCategoryDescription}
                    </Text>
                  </Box>
                </Flex>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  )
}
