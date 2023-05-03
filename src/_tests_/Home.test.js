import { screen, render } from '@testing-library/react'
import Home from '../pages/Home'


// generic test structure
// describe('my function or component', () => {
//   it('does the following', () => {
//     expect()
//   })
// })

//  Arrange, Act, Assert

describe("<Home />", () => {
  it ("renders the home page for the user", () => {
    // Arrange
    render(<Home/>)
    //  Act - act on that condition
    const element = screen.getByText(/it's like Tinder, but for Cats!/i)
    // Assert - what is expected
    expect(element).toBeInTheDocument()
    screen.logTestingPlaygroundURL()
  })
})