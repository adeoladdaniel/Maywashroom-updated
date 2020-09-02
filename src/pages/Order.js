import React from "react";
import '../App.scss';
import {Form, Button } from "react-bootstrap"
 



function Order (){
return(
<React.Fragment>
  <div className="order">
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Frist Name:</Form.Label>
    <Form.Control type="email" placeholder="" />
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Last Name:</Form.Label>
    <Form.Control type="email" placeholder="" />
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email:-</Form.Label>
    <Form.Control type="email" placeholder="" />
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Phone No:-</Form.Label>
    <Form.Control type="email" placeholder="" />
   
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Address:</Form.Label>
    <Form.Control type="email" placeholder="" />
   
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Place Order</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check  out" />
  </Form.Group>
  <Button style={{padding: "1rem 5rem 1rem 5rem"}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>

</React.Fragment>


);



}


export default Order;