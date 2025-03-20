import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/GlobalStyles.css';

function Contact () {
return  (
    <div className="home">
        <Card>
                 <Card.Body>
                <Card.Title>Contact me! </Card.Title>
                <Card.Text> 
        <InputGroup hasValidation>
        <Form>
             <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="E-mail" />
            </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                 <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
      </Form.Group>
        </Form>
       
    </InputGroup>
    <Row>
        <Form.Label>
        Message
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Message"/>
        </Col>
      </Row>
      <Row>
      <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
        </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
}
export default Contact; 