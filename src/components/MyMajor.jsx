import { Flex, Heading, Menu, MenuButton, MenuList, MenuItem, Text, Collapse, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react"
import { majors } from "../Majors"
import { Droppable } from "react-beautiful-dnd"
import Course from "./Course"
import {data} from './data.js'
import { useState } from "react"




// import { create } from "lodash"

export default function MyMajor(props) {

    function createNewState(major) {
        let response = data[major]
        let mainCategories = response['Main Categories']
        let droppables = []
        let newState = {}
        let resCourses = {}


        for (let category of mainCategories) {
            if (response[category]['Courses'].length > 0) {
                droppables.push([category, {id: category, title: category, courseIds: response[category]['Courses'].map((courseDict)=>courseDict.code)}])
                for (let course of response[category]['Courses']) {
                    resCourses[course.code] = course
                }
            }
            
            if (response[category]['Subcategories'].length > 0){
                for (let subCategory of response[category]['Subcategories']){
                    droppables.push([subCategory, {id: subCategory, title: subCategory, courseIds: response[subCategory]['Courses'].map((courseDict)=>courseDict.code)}])
                    for (let course of response[subCategory]['Courses']) {
                        resCourses[course.code] = course
                    }
                }
            }
        }

        for (let droppable of droppables) {
            newState[droppable[0]] = droppable[1]
        }

        return [droppables, newState, resCourses, response]
    }

    let major = ''
    let message = 'Choose your major'
    let color = 'maroon'
    if (props.major === ''){
        major = "No major selected"
    }
    else {
        major = props.major
        message = 'Change your major'
        color = 'blue'
    }
    return (
        <>
        <Flex
                width="250px"
                flexDirection ='row'
                pr='2rem'
        >
        <Heading 
            textAlign='left'
            color='black'
            fontSize='15px'    
        >
            {major}
        </Heading>
            </Flex>
            <Flex
                flexDirection='column'
                alignItems='flex-start'
                width='100%'>
            <Menu isLazy>
            <MenuButton color={color} fontSize='13px' alignSelf='flex-end'>{message}</MenuButton>
            <MenuList height="300px" width="100px" overflowX='clip' overflowY="scroll">
                {
                    majors.map((major) => (
                        <MenuItem 
                        fontSize='13px' 
                        color='blue' 
                        textOverflow='clip' 
                        onClick={() => 
                            props.update(prevState => 
                                ({...prevState, 
                                    major: major.major, 
                                    majorSections: createNewState(major.major)[0].map((item)=> item[0]),
                                    ...createNewState(major.major)[1],
                                    semesters: {...prevState.semesters, ...createNewState(major.major)[1]},
                                    courses: {...prevState.courses, ...createNewState(major.major)[2]},
                                    response: createNewState(major.major)[3]
                                }))}>{major.major}
                        </MenuItem>
                    ))
                }
            </MenuList>
            </Menu>
            </Flex>
            <Flex
                flexDirection='column'
                textAlign='left'
            >
            {
                props.response['Main Categories'].map((mainCategory) => (
                    <>
                    <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton >
                            <Flex flexDirection='column' textAlign='left' >
                                <Text fontWeight='bold'
                                fontSize='13px' color='black'
                                >{mainCategory}
                                </Text>
                                {/* <Text fontSize='11px' color='goldenrod'>In progress</Text> */}
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        {props.response[mainCategory].Subcategories.map((subCategory)=>(
                            <Text 
                            fontSize='13px'
                            fontWeight='bold'
                            color='black'
                            opacity='55%'
                            >
                                {subCategory}
                            </Text>

                        ))}
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                    </>
                ))
            }
            </Flex>
                    {props.sections.map((section) => (
                        <Droppable droppableId={section.title}>
                        {(droppableProvided, droppableSnapshot) => (
                          <Flex
                          mt='10px'
                            align='flex-start'
                            textAlign='left'
                            px=".25rem"
                            flexDir="column"
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                          >
                            <Heading
                                fontSize='13px' 
                                color='black'
                                textAlign='left'>
                                    {section.title}
                            </Heading>
                            
                            {props.courses[section.title].map((course, index) => (
                                    <Course active={props.active.includes(course.code) ? true : false} section={props.courses[section.title]}course={course} index={index}/>
                            ))}
                          </Flex>
                        )}
                  </Droppable>
              ))}
        </>
    )
}