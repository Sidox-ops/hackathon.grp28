import React from 'react';
import { Box } from "@chakra-ui/react";
import Navbar from '../components/Navbar';

class WhoAreWe extends React.Component {
    render(){

        return (
            <>
                <Navbar
                    content1={
                        <Box flex="3">
                        <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">TITLE</Box>
                        <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
                            <Box>+ Exemple</Box>
                            <Box>+ Exemple</Box>
                            <Box>+ Exemple</Box>
                            <Box>+ Exemple</Box>
                            <Box>+ Exemple</Box >
                        </Box>
                        </Box>
                    }
                    content2={
                    <Box flex="3"></Box>
                    }
                    bold3="bold"
                    textDeco3="underline"
                />

                {/* TODO */}

            </>
        )
    }
}

export default WhoAreWe