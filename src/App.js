import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ShippingDetails from "./components/ShippingDetails" ;
import Payment from "./components/Payment" ;
import Cartpage from './pages/Cartpage';
import Productpage from './pages/Productpage';
import Confirmation from './components/Confirmation';


function App() {
  return (
   <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/product-details/:id" element={<Productpage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path='/shipping' element={<ShippingDetails />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



