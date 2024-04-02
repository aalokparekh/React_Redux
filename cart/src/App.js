import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Card } from '@mui/material';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='/' element={<Card />}></Route>
      </Routes>
    </div>
  );
}

export default App;
