import {useState} from "react";
import Header from "./components/Layuout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartisshown, setcartisshown] = useState(false);
  const showcarthandler = () => {
    setcartisshown(true);
  };
  const hidecardhandler = () => {
    setcartisshown(false);
  };
  return (
    <CartProvider>
      {cartisshown && <Cart hidecart={hidecardhandler} />}

      <Header showcart={showcarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
