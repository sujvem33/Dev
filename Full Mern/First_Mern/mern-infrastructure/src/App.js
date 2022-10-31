
import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';


function App() {

      const [user, setUser] = useState(null);

  return (
    <div className="App">
      {
          user  ?  
          <>
          <NavBar />
          <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
          </>
                : 
            <AuthPage />

      }
    </div>
  );
}

export default App;
