import React from "react"
import { Draggable } from "react-beautiful-dnd"
import { Text, useDisclosure, Flex } from "@chakra-ui/react"
import CourseModal from './CourseModal.jsx'

export default function Course(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
        <Draggable key={props.course.code} draggableId={props.active ? props.course.code + '-1' : props.course.code} index={props.index} isDragDisabled={props.active}>
            {(draggableProvided, draggableSnapshot) => (
            <>
            <Flex
                opacity={props.active ? '30%': '100%'}
                onClick={onOpen}
                flexDir="column"
                mb=".25rem"
                h="45px"
                bg='white'
                p=".25rem"
                border={props.active ? '1px solid grey' : '1px solid grey'}
                borderRadius='4%'

                w='240px'
                // outline="1.5px solid"
                alignItems="left"
                // width='100%'
                justifyContent='top'
                outlineColor={
                draggableSnapshot.isDragging
                    ? "blue"
                    : "transparent"
                }
                boxShadow={
                draggableSnapshot.isDragging
                    ? "0 5px 10px rgba(1, 0, 0, 0.6)"
                    : "unset"
                }
                ref={draggableProvided.innerRef}
                {...draggableProvided.draggableProps}
                {...draggableProvided.dragHandleProps}
            >
                <Text align="left" color={props.active ? 'black' : 'black'} fontSize="13px" fontWeight="medium" >{props.course.code}</Text>
                <Text 
                    pb='5px'
                    overflow='hidden'
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    fontSize="13px"  
                    color={props.active ? 'grey' : 'grey'}
                    align="left" >{props.course.title}</Text>
            </Flex>
            {draggableSnapshot.isDragging ?  <Flex
                opacity='40%'
                transform='none !important'
                onClick={onOpen}
                flexDir="column"
                mb=".25rem"
                h="45px"
                bg="white"
                p=".25rem"
                border='1px solid lightgrey'
                borderRadius='4%'

                w='240px'
                // outline="1.5px solid"
                alignItems="left"
                // width='100%'
                justifyContent='top'
            >
                <Text align="left" color="black" fontSize="13px" fontWeight="medium" >{props.course.code}</Text>
                <Text 
                    pb='5px'
                    overflow='hidden'
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    fontSize="13px"  
                    color='lightgrey' 
                    align="left" >{props.course.title}</Text>
            </Flex>: null}
            </>)}

        </Draggable>
        
        <CourseModal course={props.course} isOpen={isOpen} onClose={onClose}/>
      </div>
    )
}
