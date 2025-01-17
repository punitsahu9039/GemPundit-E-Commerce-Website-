import { MutatingDots } from 'react-loader-spinner';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Success = () => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    <Container className="success-page">
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col xs={12} md={6} className="text-center">
          {visible ? (
            <>
              <h2 className="text-muted mb-4">Processing Payment...</h2>
              <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#a6f7e2"
                secondaryColor="#a6f7e2"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
              />
            </>
          ) : (
            <>
              <h1 className="success-message">Payment Received Successfully!</h1>
              <Button href="/" variant="success" size="lg" className="mt-4">
                Return to Home
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
