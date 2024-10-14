import {Box, Divider, Flex, Heading, Image, Text} from "@chakra-ui/react";

const Cheers = () => {
    return (
        <>
            <Box>
                <Image w="100%" src="/public/assets/images/mokens_card_top.png"/>
                <Flex 
                    w="100%" 
                    borderTop="solid 0.5rem rgb(232, 153, 55)" 
                    bg="rgb(236, 201, 75)" 
                    color="rgb(83, 19, 193)" 
                    fontWeight="bolder"
                    borderRadius="0 0 3rem 3rem"
                    overflow="auto"
                    p="0 1rem"
                    boxShadow="md">
                    <Flex w="100%" wrap="wrap" justify="space-between" align="center">
                        <Image height="84" src="/public/assets/images/logo-cheers.png"/>
                        <Box h="84px">
                            <Box w="100%" h="12px" lineHeight="18px"></Box>
                            <Heading as="h1" fontStyle="italic" fontSize="52px" textAlign="center" h="84px">CHEERS</Heading>
                        </Box>
                    </Flex>
                    <Divider 
                        borderWidth='1px' 
                        borderColor="rgb(83, 19, 193)" 
                        opacity="1" 
                        m="1rem" 
                        h="80px" 
                        orientation="vertical"></Divider>
                    <Box mt="1rem">
                        <Text fontSize="18px" fontStyle="italic" lineHeight="18px">BALANCE</Text>
                        <Heading as="h3" textAlign="center" fontSize="52px" h="84px">0</Heading>
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