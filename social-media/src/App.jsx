import './App.scss';
import Navbar from './layout/Navbar';
// import Login from './Pages/Login'
// import Register from './Pages/Register'; 
import Main from './layout/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="all">
      <BrowserRouter>
        <div className="social-media">
         <Routes>
            {/* <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login/>} /> */}
            <Route path="*" element={<Main />} />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

