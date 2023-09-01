
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/form" element={<Form />}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;
