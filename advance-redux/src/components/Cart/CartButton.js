import classes from "./CartButton.module.css";
import {useSelector, useDispatch} from "react-redux";
import {uisliceactions} from "../../store/ui-slice";

const CartButton = (props) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const togglecarthandler = () => {
    dispatch(uisliceactions.togglecart());
  };

  return (
    <button onClick={togglecarthandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalquantity}</span>
    </button>
  );
};

export default CartButton;
