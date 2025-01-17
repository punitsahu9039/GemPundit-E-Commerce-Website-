import { useSelector, useDispatch } from "react-redux";
import { decProduct, incProduct, removeItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap'; 

const Cart = () => {

  const MyCartData = useSelector((state) => state.cart.cards);
  const dispatch = useDispatch();
  let grandtotal = 0;
  const navigate = useNavigate();

  const navigatetocheckout = () => {
    navigate("/checkout");
  };

  const CartData = MyCartData.map((key) => {
    grandtotal = grandtotal + key.qty * key.price;
    return (
      <tr key={key.id}>
        <td>
          <img src={"./src/cardimages/" + key.image} alt={key.name} height="100px" width="100px" />
        </td>
        <td>{key.name}</td>
        <td>{key.code}</td>
        <td>
          <Button variant="outline-secondary" onClick={() => { dispatch(decProduct(key.id)) }}>-</Button>
          {key.qty}
          <Button variant="outline-secondary" onClick={() => { dispatch(incProduct(key.id)) }}>+</Button>
        </td>
        <td>{key.price}</td>
        <td>{key.qty * key.price}</td>
        <td>
          <Button variant="danger" onClick={() => { dispatch(removeItem(key.id)) }}>Remove</Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Container>
        <Row className="my-4">
          <Col>
            <h1 className="text-center">Your Cart</h1>
          </Col>
        </Row>
        
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Code</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CartData}
          </tbody>
        </Table>

        <Row className="my-4">
          <Col md={{ span: 3, offset: 9 }} className="d-flex justify-content-between align-items-center">
            <h4>Total: ₹{grandtotal}</h4>
            <Button variant="success" onClick={navigatetocheckout}>Proceed to Checkout</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
