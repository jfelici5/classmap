import React from "react";
import '../App.css'
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";

export default function Header() {
    return(
        <Box width='100%'>
            <Flex
                
                height='50px'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                px='1rem'
                borderBottom='1px solid lightgrey'>
            <HStack>
                <Text fontWeight='bold'>
                    classmap
                </Text>
                <Text fontSize='13px' fontWeight='thin'>About</Text>
                <Text fontSize='13px' fontWeight='thin'>Contact</Text>
            </HStack>
            <Text>icon</Text>
            </Flex>
            
        </Box>
    )
}