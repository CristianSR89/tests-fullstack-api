import { Box, Flex } from "@chakra-ui/react"

import Cheers from "../../components/Cheers/Cheers"
import DailyRewards from "../../components/Cheers/DailyRewards/DailyRewards"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import ProfileInfoHome from "../../components/ProfileInfoHome/ProfileInfoHome"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/index-page")({
  component: IndexPage,
})

function IndexPage() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Flex justify="center" p="3rem"> 
        <ProfileInfoHome></ProfileInfoHome>
        <Box ml="4rem" maxW="600px">
          <Cheers></Cheers>
          <DailyRewards mt="3rem"></DailyRewards>
        </Box>
      </Flex>
    </>
  )
}
