import {Box, Divider, Flex, Heading, Image, Text, useTheme} from "@chakra-ui/react";

const Cheers = () => {
    const theme = useTheme();
    
    return (
        <>
            <Box>
                <Image w="100%" src="/public/assets/images/mokens_card_top.png"/>
                <Flex 
                    w="100%" 
                    borderTop={`solid 0.5rem ${theme.colors.ui.claim}`}
                    bg={theme.colors.ui.bgYellow} 
                    color={theme.colors.ui.textBlue}
                    fontWeight="bold"
                    fontStyle="italic"
                    borderRadius="0 0 3rem 3rem"
                    p="0 1rem" 
                    boxShadow="md">
                    <Flex 
                        overflow="hidden" 
                        w="100%" 
                        wrap="wrap" 
                        justify="space-between" 
                        align="center"
                    >
                        <Image height="84" src="/public/assets/images/logo-cheers.png"/>
                        <Box h="84px">
                            <Box w="100%" h="12px" lineHeight="18px"></Box>
                            <Heading 
                                as="h1" 
                                fontSize="52px" 
                                textAlign="center" 
                                h="84px"
                            >
                                CHEERS
                            </Heading>
                        </Box>
                    </Flex>
                    <Divider 
                        borderWidth='1px' 
                        borderColor={theme.colors.ui.textBlue} 
                        opacity="1" 
                        m="0.5rem" 
                        h="80px" 
                        orientation="vertical"></Divider>
                    <Box mt="1rem">
                        <Text fontSize="18px" lineHeight="18px">BALANCE</Text>
                        <Heading as="h3" textAlign="center" fontSize="52px">0</Heading>
                    </Box>
                </Flex>
                <Text fontSize="16" color="white" textAlign="center" mt="1.5rem">
                    Cheers will be accrued based upon user activity. Read more about Cheers `here`.
                </Text>
            </Box>
        </>
    );
}

export default Cheers