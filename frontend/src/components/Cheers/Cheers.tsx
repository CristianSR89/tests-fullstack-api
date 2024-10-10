import {Box, Divider, Flex, Image, MenuItem, MenuList, Text} from "@chakra-ui/react";
import { HamburgerIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";

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
                    p="1rem"
                    boxShadow="md">
                    <Flex w="100%" wrap="wrap" justify="space-between" align="center">
                        <Image height="102" src="/public/assets/images/logo-cheers.png"/>
                        <Box h="102px">
                            <Box w="100%" h="18px" lineHeight="18px"></Box>
                            <Text fontSize="52px" textAlign="center" h="84px">CHEERS</Text>
                        </Box>
                    </Flex>
                    <Divider 
                        borderWidth='2px' 
                        borderColor="rgb(83, 19, 193)" 
                        opacity="1" 
                        m="0 1rem" 
                        h="100" 
                        orientation="vertical"></Divider>
                    <Box>
                        <Text fontSize="18px" lineHeight="18px">BALANCE</Text>
                        <Text textAlign="center" fontSize="52px" h="84px">0</Text>
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