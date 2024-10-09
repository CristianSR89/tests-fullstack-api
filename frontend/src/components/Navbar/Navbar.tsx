import {Flex, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { HamburgerIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";

const Navbar = () => {
    return (
        <>
            <Flex justify='flex-end' bg="var(--chakra-colors-black)" p='1rem'>
                <Menu >
                    <MenuButton 
                        borderRadius='50%'
                        variant='primary'
                        as={IconButton}
                        aria-label='Settings'
                        icon={<HamburgerIcon/>}
                    />
                    <MenuList bg="var(--chakra-colors-black)" borderColor='gray.300'>
                        <MenuItem as='a' href='#' color='white' bg="var(--chakra-colors-black)" icon={<LockIcon/>}>
                            My profile
                        </MenuItem>
                        <MenuItem as='a' href='#' color='red' bg="var(--chakra-colors-black)" icon={<UnlockIcon/>}>
                            Log out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    );
}

export default Navbar