import { firstSuperuser, firstSuperuserPassword } from "./config.ts"

import { test as setup } from "@playwright/test"

const authFile = "playwright/.auth/user.json"

setup("authenticate", async ({ page }) => {
  await page.goto("/login")
  await page.getByPlaceholder("Email").fill(firstSuperuser)
  await page.getByPlaceholder("Password").fill(firstSuperuserPassword)
  await page.getByRole("button", { name: "Log In" }).click()
  await page.waitForURL("/")
  await page.context().storageState({ path: authFile })
})
