import styles from "./MealItem.module.css";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addtocart = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onaddtocart={addtocart} />
      </div>
    </li>
  );
};

export default MealItem;
