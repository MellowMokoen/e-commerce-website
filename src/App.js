import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ItemDetailsDisplay from './components/ItemDetailsDisplay';
import BagReview from './components/BagReview';
import Shipping from './components/ShippingDetails';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/product-details" element={<ItemDetailsDisplay />} />
          <Route path='/cart' element={<BagReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
