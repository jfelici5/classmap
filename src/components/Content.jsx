import React, { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import '../App.js'
import Year from "./Year.jsx";
import SidebarTwo from "./SidebarTwo.jsx";

const reorderColumnList = (sourceCol, startIndex, endIndex) => {

    const newCourseIds = Array.from(sourceCol.courseIds);
    const [removed] = newCourseIds.splice(startIndex, 1);
    newCourseIds.splice(endIndex, 0, removed);
  
    const newColumn = {
      ...sourceCol,
      courseIds: newCourseIds,
    };
  
    return newColumn;
  };




export default function Content() {

  function updateState(data) {
    setState(data)
    console.log(state)
  }
  function buttonHandler () {    
      setState({
        courses: {
            // 1: {code: 'CSC 212', title: 'Human Computer Interaction', description: 'Learn how to project manage'},
            // 2: {code: 'CSC 240', title: 'Data Mining', description: 'Basically intro to industry DS'},
            // 3: {code: 'CSC 242', title: 'Artificial Intelligence', description: 'Neural nets and things like that'},
            // 4: {code: 'CSC 262', title: 'Computational Statistics', description: 'Should this really be listed as CS?'},
            // 5: {code: 'CSC 261', title: 'Database Statistics', description: 'Should this really be listed as CS?'},
            // 6: {code: "CSC 161", title: "Introduction to Programming", description: "Ricardo"},
            // 7: {code: "CSC 171", title: "Introduction to Computer Science", description: "Ricardo"},
            // 8: {code: "MATH 150", title: "Discrete Math", description: "Ricardo"},
            // 9: {code: "CSC 172", title: "Data Structures and Algorithms", description: "Ricardo"},
            // 10: {code: "CSC 173", title: "Systems", description: "Ricardo"},
            // 11: {code: "MATH 252", title: "Organization", description: "Ricardo"},
            // 12: {code: "MATH 280", title: "Algorithms", description: "Ricardo"}
        },
        semesters: {
          "Fall 2020": {
            id: "Fall 2020",
            title: "Fall 2020",
            courseIds:[]
          },
          "Spring 2021": {
            id: "Spring 2021",
            title: "Spring 2021",
            courseIds:[]
          },
          "Fall 2021": {
            id: "Fall 2021",
            title: "Fall 2021",
            courseIds:[]
          },
          "Spring 2022": {
            id: "Spring 2022",
            title: "Spring 2022",
            courseIds:[]
          },
          "Fall 2022": {
            id: "Fall 2022",
            title: "Fall 2022",
            courseIds:[]
          },
          "Spring 2023": {
            id: "Spring 2023",
            title: "Spring 2023",
            courseIds:[]
          },
          "Fall 2023": {
            id: "Fall 2023",
            title: "Fall 2023",
            courseIds:[]
          },
          "Spring 2024": {
            id: "Spring 2024",
            title: "Spring 2024",
            courseIds:[]
          },
          "sidebar": {
            id: "sidebar",
            title: "sidebar",
            courseIds:[]
          },
          "Pre-major Requirements": {
            id: "Pre-major Requirements",
            title: "Pre-major Requirements",
            courseIds: []
          },
          "Major Requirements": {
            id: "Major Requirements",
            title: "Major Requirements",
            courseIds: []
          }
        },
        active: [],
        major: '',
        majorSections: ["Pre-major Requirements", "Major Requirements"],
        years: {
          "2020": {
            id: "1",
            semesters: ["Fall 2020", "Spring 2021"],
          },
          "2021": {
            id: "2",
            semesters: ["Fall 2021", "Spring 2022"]
          },
          "2022": {
            id: "3",
            semesters: ["Fall 2022", "Spring 2023"]
          },
          "2023": {
            id: "4",
            semesters: ["Fall 2023", "Spring 2024"]
          },
        },
        // Facilitate reordering of the columns
        yearOrder: ["2020", "2021", "2022", "2023"],
      })
    }

    const [state, setState] = useState(yearData);
    console.log("state", state)
    const onDragEnd = (result) => {
        const { destination, source } = result;
        // If user tries to drop in an unknown destination
        if (!destination) return;
    
        // if the user drags and drops back in the same position
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        // If the user drops within the same column but in a different positoin
        
        const sourceCol = state.semesters[source.droppableId];
        const destinationCol = state.semesters[destination.droppableId];
        
        if (sourceCol.id === destinationCol.id) {
          const newColumn = reorderColumnList(
            sourceCol,
            source.index,
            destination.index
          );
    
          const newState = {
            ...state,
            semesters: {
              ...state.semesters,
              [newColumn.id]: newColumn,
            },
          };
          setState(newState);
          return;
        }

        let startCourseIds = ''
        let [removed] = ''
        let newStartCol = ''
        let endCourseIds = ''
        let newEndCol = ''
        let backToShelf = false

      if (state.majorSections.includes(sourceCol.id)) {

        startCourseIds = Array.from(sourceCol.courseIds);
        [removed] = startCourseIds.splice(source.index, 1);
        startCourseIds.splice(source.index, 0, removed);
        newStartCol = {
          ...sourceCol,
          courseIds: startCourseIds,
        };
        endCourseIds = Array.from(destinationCol.courseIds);
          endCourseIds.splice(destination.index, 0, removed);
          newEndCol = {
            ...destinationCol,
            courseIds: endCourseIds,
          };
      }

      else {
          if (state.majorSections.includes(destinationCol.id)){
            backToShelf = true
            startCourseIds = Array.from(sourceCol.courseIds);
            [removed] = startCourseIds.splice(source.index, 1);
            newStartCol = {
            ...sourceCol,
            courseIds: startCourseIds, 
            }

            endCourseIds = Array.from(destinationCol.courseIds);
            // endCourseIds.splice(destination.index, 0, removed);
            newEndCol = {
              ...destinationCol,
              courseIds: endCourseIds,
            }
          }
          else {
            startCourseIds = Array.from(sourceCol.courseIds);
            [removed] = startCourseIds.splice(source.index, 1);
            newStartCol = {
              ...sourceCol,
              courseIds: startCourseIds,
            };

            endCourseIds = Array.from(destinationCol.courseIds);
            endCourseIds.splice(destination.index, 0, removed);
            newEndCol = {
              ...destinationCol,
              courseIds: endCourseIds,
            };
          }
          
      }
    
      if (backToShelf) {
        let newState = {
          ...state,
          semesters: {
            ...state.semesters,
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol,
          },
          active: state.active.filter(function(course) { 
            return course !== state.courses[removed].code
        })
        };
        setState(newState);
      }
      else {
        let newState = {
          ...state,
          semesters: {
            ...state.semesters,
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol,
          },
          active: Array.from(new Set([
            ...state.active,
            state.courses[removed].code
          ]))
        };
        setState(newState);
      }
      };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Flex
                flexDir="row"
                bg="white"
                height="100vh"
                w="full"
                color="white-text"
                // paddingTop='200px'
                alignItems="top"
                marginRight='auto'
                marginLeft='auto'
            >
              
                <Flex >
                    <SidebarTwo
                      active = {state.active}
                      update = {updateState}
                      major = {state.major}
                      sections={state.majorSections.map((section) => state.semesters[section])}
                      response={state.response}
                      courses={Object.assign({}, ...state.majorSections.map((section) => ({[state.semesters[section].title]: state.semesters[section].courseIds.map((id)=>state.courses[id])})))}
                    />

                <button onClick={buttonHandler}>hello</button>
                <Flex
                  flexDirection='row'
                  paddingTop='80px'
                  alignItems="top">
                {state.yearOrder.map((y) => {
                    const year = state.years[y];
                    const semesters = year.semesters
                    const semesterOne = state.semesters[semesters[0]]
                    const semesterOneCourses = semesterOne.courseIds.map((courseId) => state.courses[courseId])
                    const semesterTwo = state.semesters[semesters[1]]
                    const semesterTwoCourses = semesterTwo.courseIds.map((courseId) => state.courses[courseId])
                    return <Year 
                      key={year.id} 
                      semesterOne={semesterOne} 
                      semesterTwo={semesterTwo} 
                      semesterOneCourses={semesterOneCourses}
                      semesterTwoCourses={semesterTwoCourses}
                    />;
                })}
                </Flex>
                </Flex>
            </Flex>
        </DragDropContext>
    )
}

const yearData = {
  courses: {
      // 1: {code: 'CSC 212', title: 'Human Computer Interaction', description: 'Learn how to project manage'},
      // 2: {code: 'CSC 240', title: 'Data Mining', description: 'Basically intro to industry DS'},
      // 3: {code: 'CSC 242', title: 'Artificial Intelligence', description: 'Neural nets and things like that'},
      // 4: {code: 'CSC 262', title: 'Computational Statistics', description: 'Should this really be listed as CS?'},
      // 5: {code: 'CSC 261', title: 'Database Statistics', description: 'Should this really be listed as CS?'},
      // 6: {code: "CSC 161", title: "Introduction to Programming", description: "Ricardo"}
  },
  semesters: {
    "Fall 2020": {
      id: "Fall 2020",
      title: "Fall 2020",
      courseIds:[]
    },
    "Spring 2021": {
      id: "Spring 2021",
      title: "Spring 2021",
      courseIds:[]
    },
    "Fall 2021": {
      id: "Fall 2021",
      title: "Fall 2021",
      courseIds:[]
    },
    "Spring 2022": {
      id: "Spring 2022",
      title: "Spring 2022",
      courseIds:[]
    },
    "Fall 2022": {
      id: "Fall 2022",
      title: "Fall 2022",
      courseIds:[]
    },
    "Spring 2023": {
      id: "Spring 2023",
      title: "Spring 2023",
      courseIds:[]
    },
    "Fall 2023": {
      id: "Fall 2023",
      title: "Fall 2023",
      courseIds:[]
    },
    "Spring 2024": {
      id: "Spring 2024",
      title: "Spring 2024",
      courseIds:[]
    },
    "sidebar": {
      id: "sidebar",
      title: "sidebar",
      courseIds:[]
    }
  },
  response: {
    "Main Categories": []
  },
  active: [],
  major: '',
  majorSections: [],
  years: {
    "2020": {
      id: "1",
      semesters: ["Fall 2020", "Spring 2021"],
    },
    "2021": {
      id: "2",
      semesters: ["Fall 2021", "Spring 2022"]
    },
    "2022": {
      id: "3",
      semesters: ["Fall 2022", "Spring 2023"]
    },
    "2023": {
      id: "4",
      semesters: ["Fall 2023", "Spring 2024"]
    },
  },
  // Facilitate reordering of the columns
  yearOrder: ["2020", "2021", "2022", "2023"],
};