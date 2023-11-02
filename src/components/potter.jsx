import { Component } from "react";
import { Image, Row, Container, Col, Card } from "react-bootstrap";

// http://www.omdbapi.com/?apikey=ca6b81c6&s=harry%20potter

class Potter extends Component {

  state={ HarryPotter:[] }

  componentDidMount = () => {
    
    this.getDate()
                             }

getDate = async ()=>{
  try {
    const response = await fetch('http://www.omdbapi.com/?apikey=ca6b81c6&s=harry%20potter')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({

        HarryPotter: data.Search,
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
    <h4 className="ms-3 mb-4 text-white">Harry Potter Saga</h4>
    <Container className=" ms-lg-5">
      <Row>
        {this.state.HarryPotter.map((movie) =>{

           if (movie.imdbID
            !==
            "tt1756545" & movie.imdbID
            !==
            "tt16116174" & movie.imdbID
            !==
            "tt0330373" & movie.imdbID
            !==
            
"tt1201607"){
          return (<Col xs={6} md={4} lg={2} className="" key={movie.imdbID}>
           <Card.Img  src={movie.Poster} className="imm"/>
          
        </Col>
             ) }
        })
        }
       
      
        

      </Row>
    </Container>
</div>
  )
}

}

 
  

export default Potter