import RequireAuth from 'components/RequireAuth';
import Admin from 'features/Admin';
import Auth from 'features/Auth';
import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import Customer from 'features/Customer';
import Cart from 'features/Customer/Cart';
import Order from 'features/Customer/Order';
import Oder from 'features/Customer/Order';
import OrderHistory from 'features/Customer/OrderHistory';
import OderHistory from 'features/Customer/OrderHistory';
import Product from 'features/Customer/Product';
import ProductDetails from 'features/Customer/ProductDetails';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customer />}>
          {/* PUBLIC ROUTE */}
          <Route index element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* PRIVATE ROUTE */}
          <Route element={<RequireAuth />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="orderhistory" element={<OrderHistory />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="order" element={<Order />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
