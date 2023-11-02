

import { Component } from "react";
import { Image, Row, Container, Carousel, Col } from "react-bootstrap";



class SpiderMan extends Component {
    state = {
      spider: []
    };
  
    componentDidMount = () => {
      this.getData();
    };
  
    getData = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=ca6b81c6&s=spider%20man"
        );
        if (response.ok) {
          const data = await response.json();
          this.setState({
            spider: data.Search
          });
        } else {
          throw new Error("Errore nella richiesta API");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  // ciao Stefano, ovviamente questo carosello non è frutto delle mie competenze, ero curiosa e ho preso un po di soluzioni esterne, comunque volevo fare un prova e studiarmelo.
    render() {
      return (
        <Container className=" justify-content-start ms-5 mb-5">
            <h4 className="ms-md-3 mb-4 text-white mt-5  ">SpiderMan Saga</h4>
          <Carousel>
            {this.state.spider.map((movie, index) => {
              if (index % 6 === 0) {
                const movies = this.state.spider.slice(index, index + 6);
                return (
                  <Carousel.Item key={index}>
                    <Row>
                      {movies.map((movie, innerIndex) => {
                        return (
                          <Col sm={2} key={innerIndex}>
                            <Image src={movie.Poster} alt={movie.Title} className="carousel-image" />
                          </Col>
                        );
                      })}
                    </Row>
                  </Carousel.Item>
                );
              } else {
                return null;
              }
            })}
          </Carousel>
        </Container>
      );
    }
  }
  
  export default SpiderMan;