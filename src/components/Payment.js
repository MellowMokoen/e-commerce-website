import React, { useState } from 'react';
import "../styles/Payment.css";
import { Link } from 'react-router-dom';

// Payment component handles user payment information
const Payment = () => {
  // State variables to manage form inputs
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to the server for processing
  };

  return (
    // Container for payment form
    <div className="payment">
      {/* Payment form */}
      <h2>Payment Method</h2>
      <form onSubmit={handleSubmit}>
        {/* Card Type selection */}
        <label htmlFor="cardType">Card Type:</label>
        <select
          id="cardType"
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
        >
          <option value="" disabled>Select Card Type</option>
          <option value="MasterCard">MasterCard</option>
          <option value="VISA Debit">VISA Debit</option>
        </select>

        {/* Card Number input */}
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          id="cardNumber"
          type="text"
          placeholder="0000-0000-0000-0000"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        {/* Expiry Date input */}
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          id="expiryDate"
          type="text"
          placeholder="MM / YYYY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        {/* CVC input */}
        <label htmlFor="cvc">CVC:</label>
        <input
          id="cvc"
          type="text"
          placeholder="000"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />

        {/* Checkbox to save as default payment method */}
        <label htmlFor="isDefault">
          <input
            id="isDefault"
            type="checkbox"
            checked={isDefault}
            onChange={(e) => setIsDefault(e.target.checked)}
          />
          Save this as your default payment method
        </label>

        {/* Link to navigate to the confirmation page */}
        <Link to="/confirmation">
          <button type="submit">Pay</button>
        </Link>
      </form>
    </div>
  );
};

export default Payment;
