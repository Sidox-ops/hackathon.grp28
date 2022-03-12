import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Textarea,
    Box,
    Select,
} from "@chakra-ui/react";
import GraphSKC1 from "./../components/GraphSKC1";
import GraphSKC2 from "./../components/GraphSKC2";
import GraphSKC3 from "./../components/GraphSKC3";
import Graph2 from "../assets/images/Graph2.png"


export default function ChartPage() {


    const [chart, setchart] = useState("1")
    console.log(chart)

    return (
        <>
            <Navbar
                content1={
                    <Box flex="3">
                        <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                            Want to contact us ?
                        </Box>
                    </Box>
                }
            />


            <Box backgroundColor="white" fontSize="4xl" display="flex" flexDirection="column" paddingX={"360px"} >
                STEP 1 - Results <br />
                Part 1 <br />
                <Box fontSize="2xl">
                    Skin score value
                    <Select
                        width="65px"
                        height="30px"
                        marginLeft="1rem"
                        display="inline-flex"
                        onChange={(e) => setchart(e.target.value)}
                    >

                        <option style={{ color: "#18222E" }} value={"1"}>
                            1
                        </option>
                        <option style={{ color: "#18222E" }} value={"2"}>
                            2
                        </option>
                        <option style={{ color: "#18222E" }} value={"3"}>
                            3
                        </option>

                    </Select>
                </Box>
                {chart === "1" && <GraphSKC1 />}
                {chart === "2" && <GraphSKC2 />}
                {chart === "3" && <GraphSKC3 />}


            </Box>
            <Box fontSize="small" display="flex" flexDirection="column" paddingX={"360px"}>
                Add a comment:
                <Textarea marginTop={"10px"} height={"200px"}>

                </Textarea>

            </Box>
            <Box backgroundColor="white" marginTop="35px" fontSize="4xl" display="flex" flexDirection="column" paddingX={"360px"} >
                STEP 2 - Tester Feedback <br />
                <Box fontSize="small" fontWeight="bold" paddingY={"15px"} >
                    Name: <br />
                    Last name: <br />
                    Email: <br />
                    Age: <br />
                    Skin type: <br />
                    Freckle: <br />
                    <img src={Graph2} alt="" />
                </Box>
                <Box fontSize="large" fontWeight="bold" paddingY={"15px"}>
                    Efficiency coomments: <br />
                    Good points
                </Box>
                <Box fontSize="small">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Box>

                <Box fontSize="large" fontWeight="bold" paddingY={"15px"}>
                    Bad points
                </Box>
                <Box fontSize="small">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Box>

                <Box fontSize="large" fontWeight="bold" paddingY={"15px"}>
                    Use comments
                </Box>
                <Box fontSize="small">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Box>

                <Box fontSize="large" fontWeight="bold" paddingY={"15px"}>
                    Devise IOT comments
                </Box>
                <Box fontSize="small">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Box>



            </Box>
            <Footer />
        </>
    );
}
