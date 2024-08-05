import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Course from "./Course";

const Column = ({ column, courses }) => {
    return (
      <Flex 
        mx="10px" 
        pb='1rem' 
        rounded="3px" 
        bg="#caf0f8" 
        w="250px" 
        minHeight = '245px'  
        height={45*courses.length + 70 + 'px'}  
        flexDir="column" marginBottom="5%">
        <Flex
          mx='10px'
          align="center"
          h="20px"
          mt=".5rem"
          mb=".5rem"
        >
          <Text fontSize="15px" fontWeight={600} color="black" align="left" alignItems="center">
            {column.title}
          </Text>
        </Flex>
  
        <Droppable droppableId={column.id}>
          {(droppableProvided, droppableSnapshot) => (
            <Flex
              padding=".25rem"
              flex={1}
              flexDir="column"
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {courses.map((course, index) => (
                <Course course={course} index={index}/>
              ))}
            </Flex>
          )}
        </Droppable>
      </Flex>
    );
  };
  
  export default Column;