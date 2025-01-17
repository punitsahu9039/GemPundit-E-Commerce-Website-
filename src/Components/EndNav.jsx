import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const EndNav=()=>{
    return  (
        <>
        
         <Navbar bg="light" data-bs-theme="light">
        <Container style={{backgroundColor:"white"}} fluid>

    
          <img src="./src/images\logo.png" style={{marginRight:"80px"}}/>
          
          <Nav className="me-auto" style={{fontFamily:"monospace"}}>
            <Nav.Link href="#gemstone">GEMSTONES</Nav.Link>
            <Nav.Link href="#jewllery">JEWLLERY</Nav.Link>
            <Nav.Link href="#gemstone recommendation">GEM-RECOMMENDATION</Nav.Link>
            <Nav.Link href="#cutom jewllery">CUSTOM-JEWLLERY</Nav.Link>
            <Nav.Link href="#new arrivals">NEW-ARRIVALS</Nav.Link>
            <Nav.Link href="#vault">VAULT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default EndNav;