import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"

describe("<Header/>", () => {
  it("renders without error", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const indexLink = screen.getByText(/meet the cats/i)
    expect(indexLink).toBeInTheDocument()
  })

  it('Header has clickable links', () => {
    // Arrange
    render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    )
    
    userEvent.click(screen.getByText("Meet the Cats", { exact: false}))
    expect(screen.getByText("Meet the Cats!")).toBeInTheDocument()

  })
})
