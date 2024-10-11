import {Flex, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { HamburgerIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";

const Navbar = () => {
    return (
        <>
            <Flex justify='flex-end' bg="ui.dark" p='1rem'>
                <Menu >
                    <MenuButton 
                        borderRadius='50%'
                        variant='primary'
                        as={IconButton}
                        aria-label='Settings'
                        icon={<HamburgerIcon/>}
                    />
                    <MenuList bg="ui.dark" borderColor='gray.300'>
                        <MenuItem as='a' href='#' color='white' bg="ui.dark" icon={<LockIcon/>}>
                            My profile
                        </MenuItem>
                        <MenuItem as='a' href='#' color='red' bg="ui.dark" icon={<UnlockIcon/>}>
                            Log out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    );
}

export default Navbar