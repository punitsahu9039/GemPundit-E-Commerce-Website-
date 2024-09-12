import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Topcard=()=>{
  
  const navigate=useNavigate();
  
  const cardpage=()=>{
    navigate('/yellowsapphire')
  }

  return(
        <>

<h1 style={{textAlign:"center", marginTop:"25px"}}>Buy Gemstones Online</h1>

<h5 style={{textAlign:"center"}}>PRODUCTS OF TRUSTED EXCELLENCE</h5>

          <div >
            <div  className='topcard'>
          <Card onClick={cardpage} style={{ width: '18rem' }}>
      <img src="./src/images/img1.pnhg.webp"/>
      <Card.Body>
        <Card.Title>Yellow sapphire</Card.Title>
        <Card.Text>
        Divine Luck, Prosperity, Blissful Matrimony


        </Card.Text>
        <Button variant="primary">EXPLORE</Button>
      </Card.Body>
    </Card>

    <Card onClick={()=>{navigate("/bluesapphire")}} style={{ width: '18rem' }}>
      <img src="./src/images/img2.png"/>
      <Card.Body>
        <Card.Title>Blue Sapphire</Card.Title>
        <Card.Text>
        Great Fame, Discipline, Reverses Misfortunes
        </Card.Text>
        <Button variant="primary">EXPLORE</Button>
      </Card.Body>
    </Card>

    <Card onClick={()=>{navigate("/Greensapphire")}} style={{ width: '18rem' }}>
      <img src="./src/images/img3.png"/>
      <Card.Body>
        <Card.Title>Green Sapphire</Card.Title>
        <Card.Text>
        Vocal Charm, Creativity, Success in Business
        </Card.Text>
        <Button variant="primary">EXPLORE</Button>
      </Card.Body>
    </Card>

    <Card onClick={()=>{navigate("/Redsapphire")}} style={{ width: '18rem' }}>
      <img src="./src/images/img4.png"/>
      <Card.Body>
        <Card.Title>Red Sapphire</Card.Title>
        <Card.Text>
        Great Health, Will Power, Fame & Reputation
        </Card.Text>
        <Button variant="primary">EXPLORE</Button>
      </Card.Body>
    </Card>
  



 

    

   
    </div>
   

    </div>
        
        </>
    )
}
export default Topcard;