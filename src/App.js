import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ItemDetailsDisplay from './components/ItemDetailsDisplay';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/product-details" element={<ItemDetailsDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
