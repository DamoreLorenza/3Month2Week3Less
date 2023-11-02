

import { Component } from "react";
import { Image, Row, Container, Col, Card, Button } from "react-bootstrap";



class Hunger extends Component {

  state={ HungerGames:[]}

  componentDidMount = () => {
    
    this.getDate()
                             }

getDate = async ()=>{
  try {
    const response = await fetch('https://www.omdbapi.com/?apikey=ca6b81c6&s=hunger%20games')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({

        HungerGames: data.Search,
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
    <h4 className="ms-3 mb-4 text-white">Hunger Games Saga</h4>
    <Container className=" ms-lg-5">
      <Row>
        {this.state.HungerGames.map((movie) =>{
          if (movie.imdbID
            !==
            "tt2327114" & movie.imdbID
            !==
            "tt3413318" & movie.imdbID
            !==
            "tt2858204" & movie.imdbID
            !=="tt2427488"){
          return <Col xs={6} md={4} lg={2} className="" key={movie.imdbID}>
            <Card>
          <Card.Img  src={movie.Poster} className="imm"/>
          
          </Card>
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

 
  

export default Hunger