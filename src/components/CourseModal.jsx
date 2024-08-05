import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalContext, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"

export default function Course(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.course.code}: {props.course.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
                flexDirection='column'>
            <Text 
                fontSize='13px' 
                fontWeight='bold'>    
            Description
            </Text>
            <Text 
                fontSize='13px' 
            >    
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor aut facilis necessitatibus a nisi praesentium reiciendis provident saepe officia nulla. Ipsum natus iste ipsa facere pariatur! Officia quisquam consectetur vitae.
            </Text>
            <Text 
                fontSize='13px' 
                fontWeight='bold'
                pt='.25rem'>    
            Pre-requisites
            </Text>
            <Text 
                fontSize='13px' 
            >    
            DSC 201, CSC 161
            </Text>
            <Text 
                fontSize='13px' 
                fontWeight='bold'
                pt='.25rem'>    
            Offered
            </Text>
            <Text 
                fontSize='13px' 
            >    
            Fall, Spring
            </Text>
            </Flex>
            
          </ModalBody>

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}