import Card from 'react-bootstrap/Card';
// import Header from './Header'; // Ensure this path is correct
// import Footer from './Footer'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../styles/GlobalStyles.css'; 


function AboutPage (){
    return (
        <>
        <div className="about">
        <Card className="projectText">
                <Card.Body>
                   <Card.Title>About The Developer</Card.Title>
                    <Container>
                    <Row>
                    <Col xs={6} md={4}>
                        <Image src="/images/Untitled.jpg" roundedCircle className="img-fluid" style={{ maxWidth: '100px', height: 'auto' }} />
                     </Col>
                  </Row>
                  </Container>
                    <Card.Text class="cardText">
                        Hello! My name is Rashelle Brownfield and I am a practicing web developer working to earn a certificate. I have skills in React, Postgres, JavaScript, and basic HTML and CSS. 
                        I am most interested in working with the front end, particularly in web design and UX and UI. 
                    </Card.Text>
            </Card.Body>
          </Card>
          <br />
         
          </div>
        </>
        
      );
    }

export default AboutPage;