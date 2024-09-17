import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function NavScrollExample() {

  const mydata=useSelector((state)=>state.cart.cards);
  const navigate=useNavigate();

const cartpage=()=>{
  navigate("/cart")
}

  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container style={{backgroundColor:"#f56c42"}} fluid>
        <Navbar.Brand style={{marginRight:"200px" }} href="#">+91 9340479217 | INR </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
          <CiSearch style={{margin:"13px"}} />

          <Nav.Link href="#action2">Search</Nav.Link>

<VscAccount style={{margin:"13px"}} />

            <Nav.Link as={Link} to="home">Home</Nav.Link>

            < IoIosHeartEmpty style={{margin:"13px"}} />
            <Nav.Link href="#action2">Wishlist</Nav.Link>
          

            <TiShoppingCart style={{margin:"13px"}}/>
            <Nav.Link onClick={cartpage}>Cart:{mydata.length}</Nav.Link>


            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;