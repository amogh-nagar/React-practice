import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import {useState, useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
const Cart = (props) => {
  const [togglecheckout, settogglecheckout] = useState(false);
  const [issubmitting, setissubmitting] = useState(false);
  const [didsubmit, setdidsubmit] = useState(false);
  const cartctx = useContext(CartContext);

  const totalamount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartitemremovehandler = (id) => {
    cartctx.removeItem(id);
  };

  const cartitemaddhandler = (item) => {
    cartctx.addItem({...item, amount: 1});
  };

  const cartitems = (
    <ul className={styles["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          id={item.id}
          //   onRemove={() => cartitemremovehandler(item.id)}
          onRemove={cartitemremovehandler}
          onAdd={() => cartitemaddhandler(item)}
          //   onRemove={cartitemremovehandler.bind(null,item.id)}
          //   onAdd={cartitemaddhandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  const togglecheckouthandler = () => {
    settogglecheckout((prevstate) => !prevstate);
  };

  const submitorderhandler = async (userdata) => {
    setissubmitting(true);

    await fetch(
      "https://react-food-order-1a583-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({user: userdata, ordereditems: cartctx.items}),
      }
    );
    setissubmitting(false);
    setdidsubmit(true);
    cartctx.clearcart()
    // const data = await res.json();
  };

  const hasitems = cartctx.items.length > 0;

  const cartmodel = (
    <>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      {togglecheckout ? (
        <CheckOut
          hidecheckout={props.hidecart}
          onsubmitorder={submitorderhandler}
        />
      ) : (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.hidecart}>
            Close
          </button>
          {hasitems && (
            <button className={styles.button} onClick={togglecheckouthandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const issubmittingcontent = <p>Sending order data!!</p>;
  const didsubmitcontent = (
    <>
      <p>Succesfully sent the order data</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.hidecart}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal>
      {!issubmitting && !didsubmit && cartmodel}
      {issubmitting && issubmittingcontent}
      {didsubmit && didsubmitcontent}
    </Modal>
  );
};

export default Cart;
