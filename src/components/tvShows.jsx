import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TvShow = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=ca6b81c6&s=friends"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFriends(data.Search);
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
  const Navigate = useNavigate()

  return (
    <>
    <h4 className="ms-3 mb-4 text-white">Friends</h4>
    <Container className=" ms-lg-5">
        
      <Row>
        {friends.map((movie) => {
          return (
            <Col  key={movie.imdbID}>
              <Card >
                <Link  to="/detail">
                <Card.Img variant="top" src={movie.Poster} />
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </>
  );









  
};

export default TvShow;