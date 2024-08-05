import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Stack, Text } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import React from "react"



export default function Search() {
    return (
    <Stack spacing={4} textAlign='left'>
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text fontSize='13px' color='black' fontWeight='bold'>Subject</Text>
        <Select size='sm'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
        </Select>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', }}>
    <Text fontSize='13px' color='black' fontWeight='bold'>Course (MATH or MATH 162 or 162)</Text>
    <Input size='sm'/>
    </div>
    <div>
    <Text fontSize='13px' color='black' fontWeight='bold'>Title</Text>
    <Input  size='sm'/>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
    <Text fontSize='13px' color='black' fontWeight='bold'>Description</Text>
    <Input  size='sm'/>
    </div>
    <div>
    <Text fontSize='13px' color='black' fontWeight='bold'>Semester offered</Text>
    <Select  size='sm'>

        <option value='option1'>Both</option>
        <option value='option2'>Fall</option>
        <option value='option3'>Spring</option>
    </Select>
    </div>
    <Button bg='navy' color='white' size='sm'>Find courses</Button>
    </Stack>
    )
}