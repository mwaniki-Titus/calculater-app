import './App.scss';
import Navbar from './layout/Navbar';
import Main from './layout/Main';
import LoginForm from './Pages/Login'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="all">
      <BrowserRouter>
      <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        <div className="social-media">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
