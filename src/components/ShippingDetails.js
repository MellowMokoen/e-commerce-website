import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../styles/ShippingDetails.css";
import { Link } from 'react-router-dom';

// AddressForm component for capturing shipping details
const AddressForm = () => {
  // State to manage form input values
  const [values, setValues] = useState({
    name: '',
    streetName: '',
    city: '',
    state: '',
    country: '',
  });

  // Function to handle changes in form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', values);
    // Pass the form data to the next page through props or context
  };

  return (
    // Form for capturing shipping details
    <form onSubmit={handleSubmit}>
      <div>
        <label>Shipping Name:</label>
        <input type="text" name="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
        <label>Street Name:</label>
        <input type="text" name="streetName" value={values.streetName} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={values.city} onChange={handleChange} />
      </div>
      <div>
        <label>State / Province:</label>
        <input type="text" name="state" value={values.state} onChange={handleChange} />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" name="country" value={values.country} onChange={handleChange} />
      </div>

      {/* Link to the payment page with a button to submit the form */}
      <Link to="/payment">
        <Button variant="primary" type="submit" className="add-address">
          Add Address
        </Button>
      </Link>
    </form>
  );
};

export default AddressForm;
