import {Divider, Flex, Image, Text} from "@chakra-ui/react";

import { UserPublic } from "../../client/models";
import { useQueryClient } from "@tanstack/react-query";

const ProfileInfoHome = () => {
    const queryClient = useQueryClient()
    const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"])

    return (
        <>
            <Flex 
                wrap="wrap" 
                p='5px' 
                w='200px' 
                flexFlow='column' 
                align='center' 
                color='white'
            >
                <Image 
                    border='solid' 
                    borderWidth='2px' 
                    borderColor='white' 
                    borderRadius='50%' 
                    w='96px' 
                    src="/assets/images/profile-avatar.png"
                />
                <Text 
                    w="100%" 
                    mt='1rem' 
                    fontSize='16px' 
                    fontWeight='bold'
                >
                    {currentUser?.full_name}
                </Text>
                <Flex 
                    w="100%" 
                    alignItems='center' 
                    justifyContent="flex-start"
                > 
                    <Image 
                        mr='0.5rem' 
                        w='24px' 
                        src="/assets/images/tier_1_icon.png"
                    />
                    <Text fontSize='14px'>FREE User</Text>
                </Flex>
                <Divider m='0.25rem' borderWidth='1px'/>
                <Flex w='100%' align='flex-start' flexFlow='column'>
                    <Text align='left' fontSize='14px'>Referral Code</Text>
                    <Text fontSize='14px'>S8J9KIHFDV</Text>
                </Flex>
            </Flex>
        </>
    );
}

export default ProfileInfoHome