import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {uisliceactions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isinitial = true;

function App() {
  const dispatch = useDispatch();

  const cartisvisible = useSelector((state) => state.ui.cartisvisible);

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendcartdata = async () => {
      dispatch(
        uisliceactions.setnotification({
          status: "pending",
          title: "Sending!",
          message: "Sending request",
        })
      );

      const res = await fetch(
        "https://react-redux-1a070-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          //It will override
          body: JSON.stringify(cart),
        }
      );
      // console.log(res)
      if (!res.ok) {
        throw new Error("Sending request failed!");
      }
      // const data = await res.json();
      dispatch(
        uisliceactions.setnotification({
          status: "success",
          title: "Success!",
          message: "Sent request successfully",
        })
      );
      setTimeout(()=>{
        dispatch(
          uisliceactions.resetnotification()
        );
      },2000)
    };

    if (isinitial) {
      isinitial = false;
      return;
    }

    sendcartdata().catch((err) => {
      dispatch(
        uisliceactions.setnotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    });

    
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
