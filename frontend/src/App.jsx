import Header from "./components/layouts/Header"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cart from "./components/cart/Cart"
import Home from "./components/Home"
import store from "./redux/store"
import { Provider } from 'react-redux'
import PaymentSuccess from "./components/payments/PaymentSuccess"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/payment/success" exact element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App