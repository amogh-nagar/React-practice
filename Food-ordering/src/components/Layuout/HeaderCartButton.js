import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import {useState, useContext, useEffect} from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btnisanimated, setbtnisanimated] = useState(false);
  const btnClasses = `${styles.button} ${btnisanimated ? styles.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setbtnisanimated(true);
    const timer = setTimeout(() => {
      setbtnisanimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctx]);

  return (
    <>
      <button className={btnClasses} onClick={props.cartshow}>
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
