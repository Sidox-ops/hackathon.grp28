import React, { Component, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Box,
    Select,
    Image,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
} from "@chakra-ui/react";
import GraphSKC1 from "./../components/GraphSKC1";
import GraphSKC2 from "./../components/GraphSKC2";
import GraphSKC3 from "./../components/GraphSKC3";






export default function ChartPage(props) {
    const charts = [
        {
            code: "en",
            name: "English",
            county_code: "gb",
        },
        {
            code: "fr",
            name: "Français",
            county_code: "fr",
        },
        {
            code: "cn",
            name: "中国人",
            county_code: "cn",
        },
    ];

    const [chart, setchart] = useState("1")
    const [valueSelected, setValueSelected] = useState(0)
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
                {chart === "1" && <GraphSKC1/>}
                {chart === "2" && <GraphSKC2/>}
                {chart === "3" && <GraphSKC3/>}


            </Box>
            <Footer />
        </>
    );
}
