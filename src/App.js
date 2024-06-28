import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/Utilities/NavBarLogin';
import Footer from './Components/Utilities/Footer';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import AllCategoriesPage from './Pages/Category/AllCategoriesPage';
import AllBrandsPage from './Pages/Brand/AllBrandsPage';
import ShopProductPage from './Pages/Products/ShopProductPage';
import ProductDetailsPage from './Pages/Products/ProductDetailsPage';

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategories" element={<AllCategoriesPage />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
          <Route path="/products" element={<ShopProductPage />} />
          <Route path="/products:/id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
