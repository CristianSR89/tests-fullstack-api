import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";

const RewardBlock: React.FC<{ 
    number: number; 
    bgColorButton: string; 
    radiantCircleColor: string
    isDisabled: boolean;
    lock: boolean;
    borderColor: string;  }> = ({ number, bgColorButton, radiantCircleColor, isDisabled, lock, borderColor }) => {
    return(
        <>
            <Flex 
                opacity={isDisabled ? "0.5" : "1"} 
                bg={bgColorButton} 
                border="solid 1px black"
                borderRadius="20px"
                align="center"
                justify="center">
                <Button 
                    variant={isDisabled ? "no_disable" : ""} 
                    bg={bgColorButton} 
                    boxShadow="rgba(0, 0, 0, 0.3) 0px 3px 0px 1px" 
                    w="100%" 
                    h="100%" 
                    p="0.25rem" 
                    m="0.75rem"
                    border={`2px solid ${borderColor}`}
                    borderRadius="20px"
                    background={`radial-gradient(circle, ${radiantCircleColor} 0%, transparent 80%)`}
                >
                    
                    <FaCheck />
                    <Image opacity="0.4" src="/public/assets/images/logo-cheers_white.png"/>
                    <Text 
                        textShadow="rgb(0, 0, 0) 0px 4px 0px" 
                        fontWeight="bold" 
                        fontStyle="italic" 
                        fontSize="24px"
                        color="white"
                        left="3px"
                        position="absolute"
                        bottom="10px"
                    >
                        {number}
                    </Text>
                    {lock ? 
                        <Image 
                            position="absolute" 
                            bottom="-0.7rem" 
                            opacity="0.5" 
                            right="-0.7rem" 
                            width="2rem" 
                            src="/public/assets/images/padlock_2.png"/>
                    : null }
                </Button>
            </Flex>
        </>
    );
}

export default RewardBlock