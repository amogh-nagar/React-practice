import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {sendcartdata} from "./store/cart-actions";
import {fetchcart} from "./store/cart-actions";

let isinitial = true;

function App() {
  const dispatch = useDispatch();

  const cartisvisible = useSelector((state) => state.ui.cartisvisible);

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchcart());
  }, [dispatch]);

  useEffect(() => {
    if (isinitial) {
      isinitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendcartdata(cart));
    }
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartisvisible && <Cart />}

        <Products />
      </Layout>
    </>
  );
}

export default App;
