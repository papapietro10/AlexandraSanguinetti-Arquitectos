import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <Container fluid className="footer">
    
      <Row>
      <Col className='container-footer argentina'>
          <h4>Estudio Argentina 🇦🇷 </h4>
          <p>Republica de la India 2819, 8A</p>
          <p>Buenos Aires, 1425</p>
          <p>Teléfono: 0054911-4975-0334</p>
          <p>Email: contacto@example.com</p>
        </Col>
      </Row>
      <Row>
        <Col className='container-footer uruguay'>
          <h4>Estudio Uruguay 🇺🇾 </h4>
          <p>Calle El Manantial</p>
          <p>Punta del Este, 20002</p>
          <p>Teléfono: 005989-9904469</p>
          <p>Email: as@alexasanguinetti.com</p>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
