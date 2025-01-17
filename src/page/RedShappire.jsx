import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';

const RedSapphire = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  
  const loadData = () => {
    axios
      .get("http://localhost:3000/cards?name=Red sapphire")
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


  const productCards = data.map((key) => (
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
    <Container className="my-5">
      <h1 className="text-center text-danger mb-4">Red Sapphire</h1>
      
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && <Row>{productCards}</Row>}
    </Container>
  );
};

export default RedSapphire;
