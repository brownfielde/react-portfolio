import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/GlobalStyles.css';


function Home () {
    return(
        <div className="home">
        <Card>
        <Card.Body>
          <Card.Title>Welcome! </Card.Title>
          <Card.Text> 
            Welcome to my portfolio site! 
          </Card.Text>
        </Card.Body>
       {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
      </div>
    )
}
export default Home; 