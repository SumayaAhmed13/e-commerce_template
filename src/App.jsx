
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import SearchPage from "./Pages/SearchPage";
import SignInPage from './Pages/SignInPage';
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import WishPage from "./Pages/WishPage";
import ThankYouPage from "./Pages/ThankYouPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ConditionPage from "./Pages/ConditionPage";
import CheckOutPage from "./Pages/CheckOutPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import FAQPage from "./Pages/FAQPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  

  return (
    <>
      <Router>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/productPage" element={<ProductPage/>}/>
         <Route path="/blogPage" element={<BlogPage/>}/>
         <Route path="/contactPage" element={<ContactPage/>}/>
         <Route path="/signInPage" element={<SignInPage/>}/>
         <Route path="/loginPage" element={<LoginPage/>}/>
         <Route path="/cartPage" element={<CartPage/>}/>
         <Route path="/wishPage" element={<WishPage/>}/>
         <Route path="/thankYouPage" element={<ThankYouPage/>}/>
         <Route path="/notFoundPage" element={<NotFoundPage/>}/>
         <Route path="/conditionPage" element={<ConditionPage/>}/>
         <Route path="/checkOutPage" element={<CheckOutPage/>}/>
         <Route path="/searchPage" element={<SearchPage/>}/>
         <Route path="/productDetailPage" element={<ProductDetailPage/>}/>
         <Route path="/FAQPage" element={<FAQPage/>}/>
      </Routes>
      
      <Footer/>
     </Router>
    </>
  )
}

export default App
