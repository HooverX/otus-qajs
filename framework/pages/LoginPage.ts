import type { Page } from 'playwright-core'

export function LoginPage({ page }: { page: Page }) {
  const visit = async () => {
    await page.goto('/login')
  }

  const fillEmail = async (email: string) => {
    await page.getByTestId('input-email').fill(email)
  }

  const fillPassword = async (password: string) => {
    await page.getByTestId('input-password').fill(password)
  }

  const submit = async () => {
    await page.getByTestId('btn-submit').click()
  }

  return {
    visit,
    fillEmail,
    fillPassword,
    submit
  }
}
