import { Routes, Route } from "react-router-dom";
import { AppContext, AppProvider } from "./AppContext";
import Home from "./compenents10.1/home/Home";
import Header from "./compenents10.1/header/Header";
import Product from "./compenents10.1/product/Product";
import Cart from "./compenents10.1/cart/Cart";
import Footer from "./compenents10.1/footer/Footer";
import SignIn from "./compenents10.1/pages/signin/SignIn";
import SignUp from "./compenents10.1/pages/sinup/SignUp";
import Blog12 from "./compenents10.1/Blog12/Blog12";
import Video from "./compenents10.1/video/Video";
import Order from "./compenents10.1/order/Order";
function App() {
  
  return (
    <div className="App">
     <AppProvider>
      <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/Blog" element={<Blog12/>}></Route>
          <Route path="/ProductList" element={ <Product/>}></Route>
          <Route path="/Video" element={ <Video/>}></Route>
          <Route path="/cart" element={ <Cart/>}></Route>
          <Route path="/signin" element={ <SignIn/>}></Route>
          <Route path="/signup" element={ <SignUp/>}></Route>
          <Route path="/Evaluate" element={ <Order/>}></Route>
        </Routes>
        <Footer/>
      </AppProvider>
    </div>
  );
}

export default App;
