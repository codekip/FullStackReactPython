import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Search({ word, setword, handleSubmit }) {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setword(e.target.value)}
                  placeholder="Enter search term"
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search Image
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
