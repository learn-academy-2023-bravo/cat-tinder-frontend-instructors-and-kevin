import { useParams, NavLink, useNavigate } from "react-router-dom"
import { Button } from 'reactstrap'

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let selectedCat = cats.find((cat) => cat.id === +id)

  const handleSubmit = () => {
    deleteCat(id)
    navigate('/catindex')
  }
  return (
    <main>
      {selectedCat && (
        <>
          <img alt="cat pic" src={selectedCat.image} />

          <h3>
            {selectedCat.name} likes {selectedCat.enjoys}
          </h3>
        </>
      )}
      <div>
        <NavLink to={`/catedit/${id}`} className="nav-link">
          Edit Cat Profile
        </NavLink>
        <Button onClick={handleSubmit}>Delete Cat Profile</Button>
    
      </div>
    </main>
  )
}

export default CatShow
