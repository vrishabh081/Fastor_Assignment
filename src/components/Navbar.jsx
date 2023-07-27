import React from 'react';
import { Flex, Box, IconButton, useColorModeValue, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Logo from "../images/logo.png"

const Navbar = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={bgColor}
      color={color}
    >
      <Flex align="center" mr={5}>
        <Box mr={4}>
          <Image src={Logo} alt="Logo" boxSize="50%" />
        </Box>
      </Flex>

      {/* Mobile menu toggle */}
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={<FiMenu />}
        size="md"
        onClick={() => {
          // Implement the mobile menu toggle here
        }}
      />

      {/* Desktop navigation */}
      <Box display={{ base: 'none', md: 'block' }}>
        <NavLink exact to="/" activeStyle={{ fontWeight: 'bold', color: 'teal' }} mr={4}>
          Login
        </NavLink>
        {/* Add more navigation links as needed */}
      </Box>

      {/* Mobile navigation */}
      {/* Implement the mobile menu here */}
    </Flex>
  );
};

export default Navbar;
