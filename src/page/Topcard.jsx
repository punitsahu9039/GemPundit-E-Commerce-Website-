import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Topcard = () => {
  const navigate = useNavigate();
  
  const cardpage = () => {
    navigate('/yellowsapphire');
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-3">Buy Gemstones Online</h1>
        <h5 className="text-center mb-5 text-muted">PRODUCTS OF TRUSTED EXCELLENCE</h5>

        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={cardpage} className="top-card shadow-lg border-0">
              <img src="./src/images/img1.pnhg.webp" className="card-img-top" alt="Yellow Sapphire" />
              <Card.Body>
                <Card.Title>Yellow Sapphire</Card.Title>
                <Card.Text>Divine Luck, Prosperity, Blissful Matrimony</Card.Text>
                <Button variant="primary">EXPLORE</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={() => navigate("/bluesapphire")} className="top-card shadow-lg border-0">
              <img src="./src/images/img2.png" className="card-img-top" alt="Blue Sapphire" />
              <Card.Body>
                <Card.Title>Blue Sapphire</Card.Title>
                <Card.Text>Great Fame, Discipline, Reverses Misfortunes</Card.Text>
                <Button variant="primary">EXPLORE</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={() => navigate("/Greensapphire")} className="top-card shadow-lg border-0">
              <img src="./src/images/img3.png" className="card-img-top" alt="Green Sapphire" />
              <Card.Body>
                <Card.Title>Green Sapphire</Card.Title>
                <Card.Text>Vocal Charm, Creativity, Success in Business</Card.Text>
                <Button variant="primary">EXPLORE</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={() => navigate("/Redsapphire")} className="top-card shadow-lg border-0">
              <img src="./src/images/img4.png" className="card-img-top" alt="Red Sapphire" />
              <Card.Body>
                <Card.Title>Red Sapphire</Card.Title>
                <Card.Text>Great Health, Will Power, Fame & Reputation</Card.Text>
                <Button variant="primary">EXPLORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Topcard;
