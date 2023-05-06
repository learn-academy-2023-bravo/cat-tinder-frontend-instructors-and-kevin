import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate(`/catshow/${id}`)
  }
  return (
    <Form className="cat-form">
    <FormGroup>
      <Label for="cat-name">Name</Label>
      <Input
        id="cat-name"
        name="name"
        placeholder="Enter cat's name"
        type="text"
        onChange={handleChange}
        value={editCat.name}
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
        value={editCat.age}
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
        value={editCat.enjoys}
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
        value={editCat.image}
      />
    </FormGroup>
    <Button onClick={handleSubmit}>Submit</Button>
  </Form>


  )
}

export default CatEdit