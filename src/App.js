import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user/user.action";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "./utils/firebase.utils";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation-bar/navigation-bar.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setUser(user));
    });
    //when component unmounts:
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
