import { Box, Flex, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"
import useAuth, { isLoggedIn } from "../hooks/useAuth"

import Cheers from "../components/Cheers/Cheers"
import DailyRewards from "../components/Cheers/DailyRewards/DailyRewards"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import ProfileInfoHome from "../components/ProfileInfoHome/ProfileInfoHome"
import Sidebar from "../components/Common/Sidebar"
import UserMenu from "../components/Common/UserMenu"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function Layout() {
  const { isLoading } = useAuth()

  return (
    /*<Flex maxW="large" h="auto" position="relative">
      <Sidebar />
      {isLoading ? (
        <Flex justify="center" align="center" height="100vh" width="full">
          <Spinner size="xl" color="ui.main" />
        </Flex>
      ) : (
        <Outlet />
      )}
      <UserMenu />
    </Flex>*/
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Flex w="100%" justify="center" p="2rem 3rem">
        <Flex justify="space-between" maxW="900px" >
          <ProfileInfoHome></ProfileInfoHome>
          <Box ml="2.5rem" maxW="calc(100% - 200px)" w="100%">
            <Tabs w="100%" variant="rounded" pt="1rem">
              <TabList>
                <Tab>Cheers</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p="2rem 0">
                  <Cheers></Cheers>
                  <DailyRewards mt="3rem"></DailyRewards>
                </TabPanel>
                <TabPanel p="2rem 0">
                  <p>two!</p>
                </TabPanel>
                <TabPanel p="2rem 0">
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex> 
      </Flex>
    </>
  )
}
