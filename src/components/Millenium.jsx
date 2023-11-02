import { Component } from "react";
import { Image, Row, Container, Col, Card } from "react-bootstrap";



class StarWars extends Component {

  state={ SW:[] }

  componentDidMount = () => {
    
    this.getDate()
                             }

getDate = async ()=>{
  try {
    const response = await fetch('https://www.omdbapi.com/?apikey=ca6b81c6&s=Star%20wars')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({

        SW: data.Search,
      })

    } 
    else {
      throw new Error('erroreeeeee')
         }
  
}    catch (error) {
    console.log('error', error)
                 }      
}




render() {
  return (
   <div>
    <h4 className="ms-3 mb-4 text-white">Star Wars Saga</h4>
    <Container className=" ms-lg-5">
      <Row>
        {this.state.SW.map((movie) =>{
          if (movie.imdbID
            !==
            "tt2527338" & movie.imdbID
            !==
            "tt2527336" & movie.imdbID
            !==
            "tt3748528" & movie.imdbID
            !=="tt1201607" &
            movie.imdbID
            !==
            "tt0121765"){
          return <Col xs={6} md={4} lg={2} className="" key={movie.imdbID}>
          <Card.Img  src={movie.Poster} className="imm"/>
        </Col>
}
        })
        }
       
      
        

      </Row>
    </Container>
</div>
  )
}

}

 
  

export default StarWars