import React from 'react';
import Card from 'react-bootstrap/Card';

import '../styles/GlobalStyles.css'


function Resume () {
    return  (
    <div className="home">
    <Card>
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
           <Card.Link href="https://docs.google.com/document/d/1jBrpxD2NppkUte86mONC-7pTmmKJEZGmml19-OXbtUo/edit?usp=sharing">
            Download my resume
          </Card.Link></Card.Subtitle>
        <Card.Text>
          <h4>
            Front-end Proficiencies</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap, PureCSS</li>
          <h4>Back-end Proficiencies</h4>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgresSQL</li>
        </Card.Text>
      </Card.Body>
   </Card>
   </div>
 
);
}
export default Resume; 