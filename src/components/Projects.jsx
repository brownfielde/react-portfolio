import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Project = ({ title,  text, image, deployedLink, repoLink }) => {
    return (
        <div className ="project">
            <CardGroup>
            <Card>
                <Card.Body>
            <Card.Title><h3>{title}</h3></Card.Title>
            <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
            <Card.Text>
                    <h4>{text}</h4>
                     <Button variant="outline-dark">
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
                    </Button>
                    <Button variant="outline-dark">
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
                    </Button>
                   
            </Card.Text>
            </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Project;