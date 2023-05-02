import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import mockCats from './mockCats'
import './App.css'

const App = () => {

  const [cats, setCats] = useState(mockCats)

  console.log(cats)

return(
  <>
   <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catindex" element={<CatIndex />} />
    <Route path="/catshow" element={<CatShow />} />
    <Route path="/catnew" element={<CatNew />} />
    <Route path="/catedit" element ={<CatEdit />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
   <Footer />
  </>
)

}

export default App;
