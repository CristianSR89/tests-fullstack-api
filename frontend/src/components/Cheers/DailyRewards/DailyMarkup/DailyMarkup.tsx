import { Box, Flex, chakra, useTheme } from "@chakra-ui/react";

const DailyMarkup: React.FC<{ 
    number: number;
}> = ({ number, ...props }) => {
    const theme = useTheme();
    return(
        <>
            <Flex 
                w="35px" 
                align="center" 
                flexFlow="column"
                {...props}
            >
                {Array.from({ length: number }, (_, i) => (
                    <Flex key={i} align="center" flexFlow="column">
                        <Flex 
                            fontSize="24px"
                            fontStyle="italic"
                            textShadow="rgb(0, 0, 0) 0px 2px 0px"
                            color="white"
                            w="35px" 
                            h="35px" 
                            borderRadius="50%"
                            border="solid black 1px"
                            bg={theme.colors.ui.claim}
                            align="center"
                            justify="center"
                            zIndex="10"
                            mt={i > 0 ? "-10px" : "0px"}
                            sx= {{
                                WebkitTextStroke: '1px black',
                            }}
                        >
                            {i + 1}
                        </Flex>
                        {i < number - 1 && (
                            <Box 
                                mt="-10px" 
                                w="15px" 
                                border="solid black 1px" 
                                bg={theme.colors.ui.claim}
                                h="134px"
                            />
                        )}
                    </Flex>
                ))}
            </Flex>
        </>
    );
}

export default chakra(DailyMarkup)