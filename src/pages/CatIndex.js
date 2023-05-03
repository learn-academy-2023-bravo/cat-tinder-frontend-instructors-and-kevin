import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"


const CatIndex = ({cats}) => {

  return (
    <main>
      {cats?.map((cat, index) => {
        return(
          <Card
            color="light"
            style={{
              width: '18rem'
            }}
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
            <Button>
              The Cat's Meow
            </Button>
          </CardBody>
        </Card>
        )
      
      })}
   
    </main>
  )
}

export default CatIndex