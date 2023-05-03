import { useParams } from "react-router-dom"


const CatShow = ({cats}) => {
 const { id } = useParams()
 let selectedCat = cats.find(cat => cat.id === +id)
  return (
   <main>
    {selectedCat && (
      <>
        <img
        alt = 'cat pic'
        src = {selectedCat.image}
        />

      <h3>
        {selectedCat.name} likes {selectedCat.enjoys}
      </h3>
      </>
    ) }
  </main> 
  )
}

export default CatShow