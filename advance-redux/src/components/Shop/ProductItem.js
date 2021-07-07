import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import {useDispatch,useSelector} from "react-redux";
import {cartsliceactions} from "../../store/cart";
const ProductItem = (props) => {
  const {title, price, description, id} = props;
  const dispatch = useDispatch();

  const addtocarthandler = () => {
    dispatch(cartsliceactions.addtocart({title, price, description, id}));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtocarthandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
