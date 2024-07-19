import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//or a shortcut below
import {Container,Row,Col,Button,Alert} from 'react-bootstrap';
//another shortcut
//<Row xs={12} md={6} lg={3}>
        //<Col>a</Col>
//<Col>b</Col>
        //<Col>c</Col>
        //<Col>d</Col>
    //</Row>
    //or<Row xs={1} md={2} lg={4}>
    //this means, for small devices, there will be only 1 column and so on. here we are mentioning no of columns
    //not how many parts they are taking
const el=(
<Container>
    <Alert variant="primary">you have registered</Alert>
    <Row>
        <Col xs={12} md={6} lg={3}>a<Button variant="success">success!!</Button></Col>
        <Col xs={12} md={6} lg={3}>b</Col>
        <Col xs={12} md={6} lg={3}>c</Col>
        <Col xs={12} md={6} lg={3}>d</Col>
    </Row>
</Container>
);
export default el;