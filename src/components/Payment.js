import React, { useState } from 'react';
import "../styles/Payment.css";

const Payment = () => {
 const [cardType, setCardType] = useState('MasterCard');
 const [cardNumber, setCardNumber] = useState('5126-5987-2214-7621');
 const [expiryDate, setExpiryDate] = useState(' MM / YYYY');
 const [cvc, setCvc] = useState('123');
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
          <option value="MasterCard">MasterCard</option>
          <option value="VISA Debit">VISA Debit</option>
        </select>

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          id="expiryDate"
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <label htmlFor="cvc">CVC:</label>
        <input
          id="cvc"
          type="text"
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

        <button type="submit">Add Payment Method</button>
      </form>
    </div>
 );
};

export default Payment;