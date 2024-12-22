import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Header from './Components/SingleComponents/Header';

import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import MarketCapTable from './Components/Pages/MarketCapTable.jsx'


const App = () => {

  
  return (
    <div className='crypt-dark'>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<MarketCapTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
