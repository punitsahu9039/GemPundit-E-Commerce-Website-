import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { Row, Col, Container } from 'react-bootstrap';

const GreenSapphire = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

 
  const loadData = () => {
    axios
      .get("http://localhost:3000/cards?name=Green sapphire")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load products.');
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  
  const addDataToCart = (id, name, code, price, image, qty) => {
    dispatch(
      addToCart({
        id,
        name,
        code,
        price,
        image,
        qty,
      })
    );
  };


  const cardData = data.map((key) => (
    <Col md={4} sm={6} className="mb-4" key={key.id}>
      <Card className="product-card">
        <Card.Img variant="top" src={`./src/cardimages/${key.image}`} alt={key.name} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>SKU: {key.code}</Card.Text>
          <Card.Text>
            <strong>Price: ₹{key.price}</strong>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              addDataToCart(key.id, key.name, key.code, key.price, key.image, key.qty)
            }
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container className="text-center my-5">
      <h1 className="display-4 text-success mb-4">Green Sapphire</h1>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : error ? (
        <div className="error-message text-danger">{error}</div>
      ) : (
        <Row>{cardData}</Row>
      )}
    </Container>
  );
};

export default GreenSapphire;
