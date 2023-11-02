import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    fetch("https://www.omdbapi.com/?apikey=ca6b81c6&s=friends" + Search.imdbID)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error");
        }
      })
      .then((data) => {
        setMovieDetail(data.Search.imdbID);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    movieDetail &&(
    <Container>
      <Row>
        {movieDetail.map((movie) => (
          <Col key={movie.imdbID}>
            <Card>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
 ) );
};

export default Detail;

