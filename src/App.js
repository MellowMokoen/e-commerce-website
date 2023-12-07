import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ItemDetailsDisplay from './components/ItemDetailsDisplay';
import BagReview from './components/BagReview';
import BagItems from "./components/BagItems";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/product-details" element={<ItemDetailsDisplay />} />
          <Route path='/product-details' element={<BagItems />} />
          <Route path='/cart' element={<BagReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



