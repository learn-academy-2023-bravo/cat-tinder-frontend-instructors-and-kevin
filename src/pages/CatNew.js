import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const CatNew = ({ createCat }) => {

  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    // Spread operator make a copy of state object
    // e.target.name will give us the key we are updating based on input
    // e.target.value will be the new value in state
    setNewCat({ ...newCat, [e.target.name]: e.target.value})
  }

  const handleClick = ()=>{
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="cat-name">Name</Label>
          <Input
            id="cat-name"
            name="name"
            placeholder="Enter cat's name"
            type="text"
            onChange={handleChange}
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-age">Age</Label>
          <Input
            id="cat-age"
            name="age"
            placeholder="Enter cat's age"
            type="text"
            onChange={handleChange}
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-enjoys">Enjoys</Label>
          <Input
            id="cat-enjoys"
            name="enjoys"
            placeholder="Enter cat's enjoys"
            type="text"
            onChange={handleChange}
            value={newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-image">Picture</Label>
          <Input
            id="cat-image"
            name="image"
            placeholder="Enter a picture of the cat"
            type="text"
            onChange={handleChange}
            value={newCat.image}
          />
        </FormGroup>
        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </>
  )
}

export default CatNew
