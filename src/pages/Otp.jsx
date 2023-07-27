import React, { useState } from "react";
import {
  Box,
} from "@chakra-ui/react";
import VerifyNumberBox from "../components/VerifyNumberBox";

export default function Otp() {
   
  return (
   <>
      <Box w="100%" minHeight={"100vh"} display="flex" flexDirection={"column"}>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr"}>
          <Box minH="200px" p="50px 100px">
            <Box minH="100vh">
              <Box mb="20px">
              
              </Box>

              {/* /////////////////// */}
             
          
              <VerifyNumberBox />
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
