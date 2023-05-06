import Footer from './components/Footer'
import Header from './components/Header'

import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

const App = () => {

  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch('http://localhost:3000/cats')// this is the request
    //response is a JSON object; .json() converts it to something you can use in JS
    .then(response => response.json())
    .then(payload => {
      setCats(payload)
    })
    .catch(error => console.log("Cat read errors ", error))
  }

  const createCat = (createdCat) => {
    fetch('http://localhost:3000/cats', {
      body: JSON.stringify(createdCat),
      headers : {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    // no payload since it's adding to the database. We are not getting anything back as far as data. 
    // calling on readCat now refreshes state to include the new cat
    .then(() => readCat())
    .catch(error => console.log("Create cat errors: ", error))


  }
  const updateCat = (selectedCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(selectedCat),
      headers: { 
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => readCat())
    .catch(error => console.log('Updated cat errors: ', error))
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => readCat())
    .catch(errors => console.log("delete errors:", errors))
  }
return(
  <>
   <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catindex" element={<CatIndex cats={cats}/>} />
    <Route path="/catshow/:id" element={<CatShow cats={cats} deleteCat={deleteCat} />} />
    <Route path="/catnew" element={<CatNew createCat={createCat} />} />
    <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />}/>
      <Route path="*" element={<NotFound />} />
   </Routes>
   <Footer />
  </>
)

}

export default App;
