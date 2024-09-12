import Card from 'react-bootstrap/Card';

function Shop() {
  return (
<>
<div style={{marginTop:"20px"}}>
    <h1 style={{textAlign:"center"}}>Shop By Collection</h1>
    <h6 style={{textAlign:"center"}}>A RANGE OF EXQUISITE PRODUCTS</h6>
    <Card>
        <img src='./src/images/gemstone-pair.webp' />
        <Card.Body>
          <Card.Text>
          <h2 style={{textAlign:"center"}}><b >Exclusive Custom Designs</b> <br/></h2>
          <h5 style={{textAlign:"center"}}> <b>ARTISTIC EXPRESSIONS IN FORMS OF JEWELLERY</b></h5>
           
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      
      


<div className='shopcard'>
    <Card style={{ width: '18rem' }}>
        <img src='./src/card/img1.png'/>
      <Card.Body>
        <Card.Title>Engagement Rings</Card.Title>
      </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <img src='./src/card/img2.png'/>
      <Card.Body>
        <Card.Title>Earrings </Card.Title>
      </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <img src='./src/card/img3.png'/>
      <Card.Body>
        <Card.Title>Gemstone Brooches </Card.Title>
      </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <img src='./src/card/img4.png'/>
      <Card.Body>
        <Card.Title>Salman Khan Bracelet </Card.Title>
      </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Shop;