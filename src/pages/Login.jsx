import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import notification from "../Toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [number, setNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit =  (event) => {
           event.preventDefault();
           const num = number
           if(isNaN(+num)){
            notification("error", "Enter valid number");
            return;
           }
           if(number.length < 1){
            notification("error", "Phone Number is required");
           }else if(number.length > 10 || number.length < 10){
            notification("error", "Enter Valid Phone Number! length should be 10");
           }else{
            notification("success", "OTP 123456");
            navigate("/otp");
           }
    };
  return (
    <>
    <Box w="100%" minHeight={"100vh"} display="flex" flexDirection={"column"}>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr"}>
          <Box minH="200px" p="50px 100px">
            <Box minH="100vh">
              <Box mb="20px">
              
              </Box>

              {/* /////////////////// */}
              <Flex minH={"100vh"} align={"flex-start"} justify={"center"}>
                <Stack
                  spacing={4}
                  w={"full"}
                  maxW={"md"}
                  rounded={"xl"}
                  p={6}
                  my={2}
                >
                  <Heading
                    lineHeight={1.1}
                    fontSize={{ base: "2xl", sm: "3xl" }}
                  >
                    Fastor Login Form
                  </Heading>
                  <Text color={"#A0AEC0"} mb="30px">
                    Enter your number and get otp!
                  </Text>

                  <form onSubmit={handleSubmit}>
                    <FormControl id="email" isRequired mb={"20px"}>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        placeholder="+91 0000000000"
                        _placeholder={{ color: "gray.500" }}
                        type="text"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                      />
                    </FormControl>

                    <Stack
                      spacing={6}
                      direction={["column", "row"]}
                      mb={"30px"}
                    >
                      <Button
                        bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
                        color={"white"}
                        w="full"
                        type="submit"
                      >
                        Login
                      </Button>
                    </Stack>
                  </form>
                  {/* //////////////// */}
             
                  {/* //////////////// */}
                </Stack>
              </Flex>
              {/* ////////////////////// */}
            </Box>
          </Box>

          <Box minH="200px">
            <Box
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              minH={"100vh"}
              borderRadius={"0px 0px 0px 250px"}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
