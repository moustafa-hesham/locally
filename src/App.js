import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/Utilities/NavBarLogin';
import Footer from './Components/Utilities/Footer';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
