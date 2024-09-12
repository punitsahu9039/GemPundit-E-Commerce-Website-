import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainNav from "./Components/MainNav";
import { Outlet } from 'react-router-dom';
import Footer from './page/Footer';



const Layout=()=>{

    return( 
        <>
 
   <Container fluid>
      <Row>
        <Col>
        
        <MainNav/>
        <Outlet/>
        <Footer/>
        
       
    
        
    
      
        
        </Col>
      </Row>
    </Container>
        
        
        
        
        
        </>
    )
    
}
export default Layout;