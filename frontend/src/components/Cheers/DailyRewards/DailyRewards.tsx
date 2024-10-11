import {Box, Button, Card, Flex, Heading, Image, VStack, chakra} from "@chakra-ui/react";

import RewardBlock from "./RewardBlock";

const rewardsItems = [
    { id: 1, bg: "#3279C4", src: "/public/assets/images/tier_1_icon.png" },
    { id: 2, bg: "#6839B9", src: "/public/assets/images/tier_2_icon.png" },
    { id: 3, bg: "#F3BE44", src: "/public/assets/images/tier_3_icon.png" }
  ];

const freeReward = [
    { id: 1, number: 10, isDisabled: false, lock: false },
    { id: 2, number: 10, isDisabled: false, lock: false },
    { id: 3, number: 20, isDisabled: false, lock: false },
    { id: 4, number: 20, isDisabled: true, lock: false },
    { id: 5, number: 30, isDisabled: true, lock: true },
];

const fanReward = [
    { id: 1, number: 30, isDisabled: false, lock: false },
    { id: 2, number: 30, isDisabled: false, lock: false },
    { id: 3, number: 40, isDisabled: false, lock: false },
    { id: 4, number: 40, isDisabled: true, lock: false },
    { id: 5, number: 50, isDisabled: true, lock: true },
];

const vipReward = [
    { id: 1, number: 50, isDisabled: false, lock: false },
    { id: 2, number: 50, isDisabled: false, lock: false },
    { id: 3, number: 60, isDisabled: false, lock: false },
    { id: 4, number: 60, isDisabled: true, lock: false },
    { id: 5, number: 100, isDisabled: true, lock: true },
];

const rewardsConfig = [
    { id: 1, rewards: freeReward, bgColorButton: "rgb(50, 121, 196)", bgColor: "#439AD3", radiantCircleColor: "rgb(190, 227, 248)" },
    { id: 2, rewards: fanReward, bgColorButton: "rgb(104, 57, 185)", bgColor: "#5313C1", radiantCircleColor: "rgb(214, 188, 250)" },
    { id: 3, rewards: vipReward, bgColorButton: "rgb(243, 190, 68)", bgColor: "#E89937", radiantCircleColor: "rgb(250, 240, 137)" },
];

const DailyRewards = (props: any) => {
    return (
        <>
            <Card 
                bg="rgb(0,0,0,0.5)" 
                borderRadius="1.5rem" 
                p="2rem" 
                boxShadow="rgba(0, 0, 0, 1) 0px 3px 0px 1px"
                {...props}
            >
                <Heading 
                    letterSpacing="-3px" 
                    as="h2" 
                    fontSize="60px" 
                    textAlign="center" 
                    fontStyle='italic'
                    textShadow="rgb(0, 0, 0) 0px 6px 0px"
                    lineHeight="55px"
                    color="white">Daily Rewards!</Heading>
                <Heading 
                    m="3rem 0 1rem"
                    as="h4" 
                    fontSize="24px" 
                    textAlign="center"
                    fontStyle='italic'
                    lineHeight="24px"
                    color="white">Mission finished!</Heading>
                <Flex align="center" flexFlow="column">
                    <Box w="fit-content">
                        <Flex position="relative" justify="center" zIndex="10" w="100%" pr="calc(2rem + 14px)">
                            {rewardsItems.map((item) => (
                                <Flex key={item.id} align="center" flexFlow="column">
                                    <Button
                                        w="fit-content"
                                        h="40px"
                                        variant="claim"
                                        isDisabled={true}
                                        fontWeight="bolder"
                                        fontSize="20px"
                                        p="0 2rem"
                                        borderRadius="10px"
                                    >
                                        Claim!
                                    </Button>
                                    <Flex
                                        justify="center"
                                        align="center"
                                        border="solid 1px black"
                                        w="200px"
                                        h="90px"
                                        bg={item.bg}
                                        borderRadius="20px"
                                        mt="4rem"
                                    >
                                        <Image overflow="hidden" mt="-2rem" w="90%" src={item.src} />
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                        <Box 
                            mt="-1rem" 
                            h="800px" 
                            overflowY="auto"
                            pr="2rem"
                            zIndex="5"
                            sx={{
                                '::-webkit-scrollbar': {
                                    width: '14px',
                                },
                                '::-webkit-scrollbar-track': {
                                    background: 'rgba(0,0,0,0.5)',
                                    borderRadius: '10px'
                                },
                                '::-webkit-scrollbar-thumb': {
                                    background: '#888',
                                    borderRadius: '10px',
                                },
                                '::-webkit-scrollbar-thumb:hover': {
                                    background: '#555',
                                },
                            }}
                            >
                            <Flex justify="center" >
                                {rewardsConfig.map(({ rewards, bgColor, bgColorButton, radiantCircleColor }) => (
                                    <VStack p="2rem 1px 1rem" key={bgColor} spacing="20px" backgroundColor={bgColor}>
                                        {rewards.map((item) => (
                                            <RewardBlock 
                                                key={item.id}
                                                number={item.number} 
                                                radiantCircleColor={radiantCircleColor} 
                                                bgColorButton={bgColorButton}
                                                isDisabled={item.isDisabled} 
                                                lock={item.lock}
                                            />
                                        ))}
                                    </VStack>
                                ))}
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Card>
        </>
    );
}
 
export default chakra(DailyRewards)