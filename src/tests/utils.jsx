import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../queryClient"
import { MemoryRouter } from "react-router-dom"
import { render } from "@testing-library/react"

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </QueryClientProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react' // eslint-disable-line react-refresh/only-export-components

// override render method
export { customRender as render }
