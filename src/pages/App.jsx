import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";
import DefaultTheme from "./../theme/DefaultTheme";
import Home from "../components/home/Home";
import Cart from "../components/cart/Cart";
import Settings from "../components/settings/Settings";
import NotFound from "./../components/error/404";

function App() {
  return (
    <DefaultTheme>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </DefaultTheme>
  );
}

export default App;
