import classes from "./CartItem.module.css";
import {useDispatch} from "react-redux";
import {cartsliceactions} from "../../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const {title, quantity, total, price, id} = props;
  const increasehandler = () => {
    dispatch(cartsliceactions.addtocart({id, price, title}));
  };

  const decreasehandler = () => {
    dispatch(cartsliceactions.removefromcart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreasehandler}>-</button>
          <button onClick={increasehandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
