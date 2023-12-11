/*
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Cart = ({ cartItems, onRemove }) => {
 const [total, setTotal] = useState(0);

 const calculateTotal = () => {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
 };

 React.useEffect(() => {
    calculateTotal();
 }, [cartItems]);

 return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Color</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.color}</td>
              <td>{item.description}</td>
              <td>{item.rating}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => onRemove(item)}>
                 Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>
        <b>Total:</b> ${total.toFixed(2)}
      </p>
      <Button variant="primary">Checkout</Button>
    </div>
 );
};

export default Cart;
*/