import React, { useState } from 'react';
import "../styles/Payment.css";
import { Link } from 'react-router-dom';

const Payment = () => {
 const [cardType, setCardType] = useState('');
 const [cardNumber, setCardNumber] = useState('');
 const [expiryDate, setExpiryDate] = useState('');
 const [cvc, setCvc] = useState('');
 const [isDefault, setIsDefault] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to the server for processing
 };

 return (
    <div className="payment">
      <h2>Payment Method</h2>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          id="cardNumber"
          type="text"
          placeholder="Enter Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          id="expiryDate"
          type="text"
          placeholder="MM / YYYY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <label htmlFor="cvc">CVC:</label>
        <input
          id="cvc"
          type="text"
          placeholder="Enter CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />

        <label htmlFor="isDefault">
          <input
            id="isDefault"
            type="checkbox"
            checked={isDefault}
            onChange={(e) => setIsDefault(e.target.checked)}
          />
          Save this as your default payment method
        </label>

        <Link to="/confirmation"><button type="submit">Pay</button></Link>
      </form>
    </div>
 );
};

export default Payment;
