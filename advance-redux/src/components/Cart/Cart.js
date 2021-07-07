import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";
const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <CartItem
            title={item.name}
            id={item.id}
            key={item.id}
            quantity={item.quantity}
            total={item.totalprice}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
