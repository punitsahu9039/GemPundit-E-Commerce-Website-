import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Debitcard from './Debitcard';
import Upi from './Upi';
import NetBanking from './NetBanking';
import CashOnDelivery from './CashOnDelivery';

const CheckOut = () => {
  const [payment, setpayment] = useState("");
  const navigate = useNavigate();

  const compchange = (e) => {
    setpayment(e.target.value);
  };

  const navigatetosuccess = () => {
    navigate('/success');
  };

  return (
    <Container className="checkout-page">
      <Row className="my-4">
        <Col md={8} className="mx-auto">
          <h2 className="text-center">Checkout</h2>

          {/* Address Form */}
          <Form className="checkout-form">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>PinCode</Form.Label>
              <Form.Control type="text" placeholder="Enter PinCode" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Number" required />
            </Form.Group>
          </Form>

          {/* Payment Methods */}
          <div className="payment-methods mt-4">
            <h5>Select Payment Method</h5>
            <div className="payment-options">
              <Form.Check 
                type="radio" 
                label="Debit/Credit Card" 
                name="payment" 
                value="debit" 
                onClick={compchange} 
                className="payment-option" 
              />
              <Form.Check 
                type="radio" 
                label="UPI" 
                name="payment" 
                value="upi" 
                onClick={compchange} 
                className="payment-option" 
              />
              <Form.Check 
                type="radio" 
                label="Internet Banking" 
                name="payment" 
                value="intbank" 
                onClick={compchange} 
                className="payment-option" 
              />
              <Form.Check 
                type="radio" 
                label="Cash On Delivery" 
                name="payment" 
                value="cod" 
                onClick={compchange} 
                className="payment-option" 
              />
            </div>
            {/* Show payment method form dynamically */}
            {payment === "debit" ? <Debitcard /> : 
             payment === "upi" ? <Upi /> : 
             payment === "intbank" ? <NetBanking /> : 
             payment === "cod" ? <CashOnDelivery /> : 
             <h6 className="text-muted">Select a payment method to proceed</h6>}
          </div>

          {/* Proceed Button */}
          <div className="text-center mt-4">
            <Button onClick={navigatetosuccess} variant="primary" size="lg" className="w-100">
              Proceed To Pay!
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
