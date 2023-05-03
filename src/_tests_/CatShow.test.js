import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CatShow from "../pages/CatShow"
import mockCats from "../mockCats"

const renderShow = () => {
render(
  <MemoryRouter>
    <Routes>
      <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
    </Routes>
  </MemoryRouter>
)
}

describe("<CatShow/>", () => {
  it("renders cat card with enjoy", () => {
    renderShow()
    expect(screen.getByText(mockCats[0].enjoys)).toBeInTheDocument()
    })
  })
