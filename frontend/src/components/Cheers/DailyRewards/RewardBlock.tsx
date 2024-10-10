import { Box, Button, Image, Text } from "@chakra-ui/react";

const RewardBlock: React.FC<{ 
    number: number; 
    bgColorButton: string; 
    radiantCircleColor: string
    isDisabled: boolean;
    lock: boolean }> = ({ number, bgColorButton, radiantCircleColor, isDisabled, lock }) => {
    return(
        <>
            <Box 
                opacity={isDisabled ? "0.5" : "1"} 
                bg={bgColorButton} 
                border="solid 1px black" 
                p="1rem" 
                w="198px" 
                h="198px" 
                borderRadius="20px">
                <Button 
                    variant={isDisabled ? "no_disable" : ""} 
                    bg={bgColorButton} 
                    borderColor="rgba(0, 0, 0, 0.3) 0px 3px 0px" 
                    boxShadow="rgba(0, 0, 0, 0.3) 0px 3px 0px 1px" 
                    w="100%" 
                    h="100%" 
                    p="0.25rem" 
                    borderRadius="20px"
                    background={`radial-gradient(circle, ${radiantCircleColor} 0%, transparent 80%)`}
                >
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
            </Box>
        </>
    );
}

export default RewardBlock