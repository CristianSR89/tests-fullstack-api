import {Box, Image} from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <Box as="section">
                <Image
                    src='/assets/images/banner.png'
                    alt="Mokens League banner"
                    height="auto"
                    alignSelf="center"
                    />
            </Box>
        </>
    );
}

export default Header