import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  const totalamount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartitemremovehandler = (id) => {
    cartctx.removeItem(id)
    
  };

  const cartitemaddhandler = (item) => {
      cartctx.addItem({...item,amount:1})
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
  const hasitems = cartctx.items.length > 0;

  return (
    <Modal>
      {cartitems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.hidecart}>
          Close
        </button>
        {hasitems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
