import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './Components/SingleComponents/Header';

import { UserProvider } from './Components/Contexts/UserProvider';

import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import MarketCapTable from './Components/Pages/MarketCapTable'


const App = () => {

  
  return (
    <div className='crypt-dark'>
      <UserProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<MarketCapTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
};

export default App;
