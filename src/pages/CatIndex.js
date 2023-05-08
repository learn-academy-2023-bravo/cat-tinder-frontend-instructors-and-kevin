import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


const CatIndex = ({cats}) => {

  return (
    <main className="cards-wrapper">
      {cats?.map((cat, index) => {
        return(
          <Card
            color="light"
            style={{
              width: '18rem'
            }}
            key={index}
          >
          <img
            alt="Sample"
            src={cat.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {cat.name}
            </CardTitle>
            <CardSubtitle>
              {cat.age}
            </CardSubtitle>
            <NavLink to={`/catshow/${cat.id}`}>
              The Cat's Meow
            </NavLink>
          </CardBody>
        </Card>
        )
      })}
    </main>
  )
}

export default CatIndex