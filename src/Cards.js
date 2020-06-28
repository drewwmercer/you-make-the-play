import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import logo from './assets/ymtp-logo-hologram.png';
import placeholder from './assets/ymtp-placeholder.jpg';


export const Cards = () => (
         <div>
           <h2>Cards backstop batter's box </h2>
           <p>
             Strike zone friendly confines astroturf batting average save cork
             double play club. Corner slugging grounder no decision yankees fan
             gold glove ground ball win.
           </p>
           <p>
             Second baseman baseball catcher bat sacrifice no-hitter skipper
             skipper sacrifice bunt. Tag league ground ball diamond cheese
             disabled list error rubber. Baseline ground rule double mustard
             around the horn leadoff tossed starter golden sombrero.
           </p>
           <Container>
             <Row>
               <Col>
                 <Card style={{ width: '18rem' }}>
                   <Card.Img
                     variant='top'
                     src={require('./assets/ymtp-placeholder.jpg')}
                   />
                   <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                       Some quick example text to build on the card title and
                       make up the bulk of the card's content.
                     </Card.Text>
                     <Button variant='primary'>Go somewhere</Button>
                   </Card.Body>
                 </Card>
               </Col>
               <Col>
                 <Card style={{ width: '18rem' }}>
                   <Card.Img variant='top' src={logo} />
                   <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                       Some quick example text to build on the card title and
                       make up the bulk of the card's content.
                     </Card.Text>
                     <Button variant='primary'>Go somewhere</Button>
                   </Card.Body>
                 </Card>
               </Col>
               <Col>
                 <Card style={{ width: '18rem' }}>
                   <Card.Img variant='top' src={placeholder} />
                   <Card.Body>
                     <Card.Header className="text-right" as='h5'>1</Card.Header>
                     <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                       Some quick example text to build on the card title and
                       make up the bulk of the card's content.
                     </Card.Text>
                     <Button variant='primary'>Go somewhere</Button>
                   </Card.Body>
                 </Card>
               </Col>
             </Row>
           </Container>
         </div>
       );
