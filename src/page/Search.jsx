import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");  // State to hold the search input
  const [products, setProducts] = useState([]);     // State to hold search results
  const [loading, setLoading] = useState(false);    // State for loading indicator

  // Function to handle search
  const handleSearch = () => {
    setLoading(true);
    // Make an API call or search in the local data based on `searchTerm`
    axios
      .get(`http://localhost:3000/products?name_like=${searchTerm}`) // Example API endpoint
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false);
      });
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center">Search Products</h3>
      <div className="search-bar">
        <input
          type="text"
          name="product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Product Name"
          className="form-control mb-3"
        />
        <Button variant="primary" onClick={handleSearch} className="w-100">
          Search
        </Button>
      </div>

      <hr style={{ size: "3", color: "lightblue" }} />

      {loading && <p className="text-center">Loading...</p>}

      {!loading && products.length > 0 && (
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`./src/images/${product.image}`} // Assuming you have images in this folder
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price}
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {!loading && products.length === 0 && searchTerm && (
        <p className="text-center">No products found for "{searchTerm}"</p>
      )}
    </Container>
  );
};

export default Search;
