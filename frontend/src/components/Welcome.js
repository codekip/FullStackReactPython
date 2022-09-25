import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Welcome() {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>Gets photos from the unsplash API. Enter any search term above</p>
      <p>
        <Button bsStyle="primary" href="http://unsplash.com">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
}

export default Welcome;
