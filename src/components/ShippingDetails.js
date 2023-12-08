import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/ShippingDetails.css";

//the input fields' values are being controlled by the state of the ShippingAddressPage component.
const ShippingAddress = () => {
 const [shippingAddress, setShippingAddress] = useState({
    name: '',
    streetName: '',
    city: '',
    province: '',
    country: '',
 });

 //this function is used to handle the changes in each field and update the corresponding value in the shipping address object.
 const handleChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    // Perform necessary actions with the shippingAddress object
    console.log(shippingAddress);
 };

 return (
    <div>
      <h1>Shipping Address</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="streetName">
          <Form.Label>Street Name</Form.Label>
          <Form.Control type="text" name="streetName" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="code">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" name="state" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State / Province</Form.Label>
          <Form.Control type="text" name="country" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="default">
          <Form.Check type="checkbox" name="default" onChange={handleChange} label="Save this as your default address" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Address
        </Button>
      </Form>
    </div>
 );
};

export default ShippingAddress;