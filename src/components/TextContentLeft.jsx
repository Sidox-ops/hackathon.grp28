import React from 'react'
import { Box } from "@chakra-ui/react"

class TextContentLeft extends React.Component {
    render(){
        return (
            <>
                <Box width="100%" display="flex" marginBottom="10rem">

                    <Box flex="1">
                        <Box color="lightblue" fontFamily="Poppins" fontWeight="bold" fontSize="3xl">{this.props.title}</Box>
                        <Box color="black" fontFamily="Poppins">{this.props.text}</Box>
                    </Box>

                    <Box flex="1">

                    </Box>

                </Box>
            </>
        )
    }
}

export default TextContentLeft
