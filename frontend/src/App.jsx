import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/place-order" element={<PlaceOrderScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/search/:keyword" element={<HomeScreen />} />
              <Route path="/page/:pageNumber" element={<HomeScreen />} />
              <Route
                path="/search/:keyword/:page/:pageNumber"
                element={<HomeScreen />}
              />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              {/* /cart/:id? -> the id is optional, because we can also go to just /cart route */}
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/admin/user-list" element={<UserListScreen />} />
              <Route
                path="/admin/product-list"
                element={<ProductListScreen />}
              />
              <Route
                path="/admin/product-list/:pageNumber"
                element={<ProductListScreen />}
              />
              <Route path="/admin/order-list" element={<OrderListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
