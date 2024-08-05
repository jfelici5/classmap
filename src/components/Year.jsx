import React from "react";
import { Flex } from "@chakra-ui/layout";
import Column from "./Column";

export default function Year(props) {
    return (
        <Flex
            flexDirection='column'>
                <Column  column={props.semesterOne} courses={props.semesterOneCourses}/>
                <Column  column={props.semesterTwo} courses={props.semesterTwoCourses}/>
        </Flex>
    )
}