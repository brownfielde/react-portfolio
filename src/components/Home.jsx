
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
      </Card>
      </div>
    )
}
export default Home; 