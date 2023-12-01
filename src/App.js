import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Productpage from './pages/Productpage';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/product-details" element={<Productpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
