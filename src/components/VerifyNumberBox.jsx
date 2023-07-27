

import { Center, Heading } from '@chakra-ui/react'
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useState } from 'react';
import notification from '../Toast';
import { useNavigate } from 'react-router-dom';

export default function VerifyNumberBox() {
    const [pinCode, setPinCode] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () =>{
      if(pinCode !== "123456"){
        notification("error", "OTP is Wrong!")
      }else{
        navigate("/restaurant");
      }
    }
  return (
    <Flex
      minH={'100vh'}
      align={'start'}
      justify={'center'}
      bg={useColorModeValue('white', 'white')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Number
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your Number
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput value={pinCode} onChange={setPinCode}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
        <Button
                        bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
                        color={"white"}
                        w="full"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Verify
                      </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}