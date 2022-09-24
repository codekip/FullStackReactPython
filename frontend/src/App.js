import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

//this was for testing...to  be able to use "word", this function needs to move into the App function below
// const handleSearchSubmit = (e) => {
//   e.preventDefault()
//   console.log(e.target[0].value);
// }

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => console.log(err));
    setWord('');
  };

  // console.log(word); // to test rerendering of component every time state changes
  // console.log(process.env);
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <div className="App">
      <Header title="Image gallery yangu" />
      <Search word={word} setword={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard deleteImage={handleDeleteImage} image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
