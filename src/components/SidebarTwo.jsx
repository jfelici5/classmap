import React from 'react'
import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from '@chakra-ui/react'
import { color, motion } from 'framer-motion'
import { useState } from 'react'
import MyMajor from './MyMajor.jsx'
import Search from './Search.jsx'


export default function SidebarTwo(props) {

    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)
  
    return (
        <Box
            pr='.25rem'
            height='100%'
            width='285px'
            bg='white'
            position='sticky'
            borderRight= '1px solid lightgrey'
            >
        <Tabs 
            variant='line'
            size='sm'>
        <TabList >
            <Tab fontSize='13px'>Find courses</Tab>
            <Tab fontSize='13px'>My major</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <Search></Search>
            </TabPanel>
            <TabPanel>
                <MyMajor active = {props.active} major={props.major} update={props.update} sections={props.sections} courses={props.courses} response={props.response}/>
            </TabPanel>
            {/* <TabPanel>
            <p>three!</p>
            </TabPanel> */}
        </TabPanels>
        </Tabs>
        </Box>  
      
    );
  }