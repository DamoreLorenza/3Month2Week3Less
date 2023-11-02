import { Container, Row, Col, Button,} from "react-bootstrap"

const Footer = ()=>{
    return(
<Container className="justify-content-center">
<Row className="justify-content-center mb-5 mt-5" >
<Col xs={6} md={4} lg={3}>
<i className="bi bi-facebook text-white me-3 "></i>
<i className="bi bi-instagram text-white me-3"></i>
<i className="bi bi-twitter-x text-white me-3"></i>
<i className="bi bi-youtube text-white me-3"></i>        
          
</Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
</Row>

<Row className="justify-content-center">
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Audio and Subtitles</p></Col>
<Col xs={6} md={4} lg={3}> <p className="text-white fs-6">Audio Description </p></Col>
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Help Center</p></Col>
<Col xs={6} md={4} lg={3}> <p className="text-white fs-6">Gift Card</p></Col>
</Row>

<Row className="justify-content-center">
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">media Center</p></Col>
<Col xs={6} md={4} lg={3}> <p className="text-white fs-6">Investor Relations </p></Col>
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Jobs</p></Col>
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Terms of Use</p></Col>
</Row>

<Row className="justify-content-center">
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Privacy</p></Col>
<Col xs={6} md={4} lg={3}> <p className="text-white fs-6">Legal Notices </p></Col>
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Coockie Preferences</p></Col>
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Corporate Information</p></Col>
</Row>

<Row className="justify-content-center">
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">Contacs US</p></Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
</Row>

<Row className="justify-content-center">
<Col xs={6} md={4} lg={3}><Button variant="outline-secondary mb-3">Service Code</Button></Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
</Row>

<Row className="justify-content-center">
<Col xs={6} md={4} lg={3}><p className="text-white fs-6">© 1997-2023 Netflix, Inc.</p></Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
<Col xs={6} md={4} lg={3}></Col>
</Row>

</Container>



    )
}

export default Footer