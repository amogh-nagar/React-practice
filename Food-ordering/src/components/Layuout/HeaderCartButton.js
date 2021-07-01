import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  return (
    <>
      <button className={styles.button} onClick={props.cartshow}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
          {ctx.items.reduce((curNumber, item) => {
            return curNumber + item.amount;
          }, 0)}
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
