import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import CatNew from "../pages/CatNew"

describe("<CatNew />", () => {
  it("renders the new cat form", () => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )
    const nameInput = screen.getByRole("textbox", { name: /name/i })
    expect(nameInput).toBeInTheDocument()
    
    const ageInput = screen.getByRole('textbox', {
      name: /age/i
    })
    expect(ageInput).toBeInTheDocument()

    const enjoysInput = screen.getByRole('textbox', {
      name: /enjoys/i
    })
    expect(enjoysInput).toBeInTheDocument()

    const imageInput = screen.getByRole('textbox', {
      name: /picture/i
    })
    expect(imageInput).toBeInTheDocument()
  })

  // it ('a frm with entries for name, age, enjoys, image', () => {
  //   const formName = screen.getByLabelText( /name/i)
  //   expect(formName.getAttribute("For")).toEqual("Name")
  // })
})
