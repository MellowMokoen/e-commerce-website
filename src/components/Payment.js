import React, { useState } from 'react';


function App() {
 const [selectedCard, setSelectedCard] = useState('');
 const [newCardholderName, setNewCardholderName] = useState('');
 const [newCardNumber, setNewCardNumber] = useState('');
 const [newExpiryDate, setNewExpiryDate] = useState('');
 const [newCVC, setNewCVC] = useState('');

 const handleSelectCard = (e) => {
    setSelectedCard(e.target.value);
 };

 const handleSaveCard = () => {
    console.log('Card saved as default payment method.');
 };

 return (
    <div className="App">
      <h1>Select a Card</h1>
      <div className="cards">
        <label>
          <input
            type="radio"
            value="mastercard"
            checked={selectedCard === 'mastercard'}
            onChange={handleSelectCard}
          />
          MasterCard ending in 4242
        </label>
        <label>
          <input
            type="radio"
            value="visa"
            checked={selectedCard === 'visa'}
            onChange={handleSelectCard}
          />
          VISA Debit ending in 2894
        </label>
      </div>

      <h2>Add a New Card</h2>
      <form className="new-card-form">
        <label>
          Cardholder Name:
          <input
            type="text"
            value={newCardholderName}
            onChange={(e) => setNewCardholderName(e.target.value)}
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            value={newCardNumber}
            onChange={(e) => setNewCardNumber(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={newExpiryDate}
            onChange={(e) => setNewExpiryDate(e.target.value)}
          />
        </label>
        <label>
          CVC:
          <input
            type="text"
            value={newCVC}
            onChange={(e) => setNewCVC(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSaveCard}>
          Save this as your default payment method
        </button>
      </form>
    </div>
 );
}

export default App;