import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newamount =
      state.totalAmount + action.item.price * action.item.amount;

    const exisitingcartitemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exisitingcartitem = state.items[exisitingcartitemindex];
    let updateditem;
    let updateditems;
    if (exisitingcartitem) {
      updateditem = {
        ...exisitingcartitem,
        amount: exisitingcartitem.amount + action.item.amount,
      };

      updateditems = [...state.items];
      updateditems[exisitingcartitemindex] = updateditem;
    } else {
      updateditem = {
        ...action.item,
      };
      updateditems = state.items.concat(updateditem);
    }
    console.log(updateditems);
    return {
      items: updateditems,
      totalAmount: newamount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const exisitingcartitemindex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exisitingcartitem = state.items[exisitingcartitemindex];

    const updatedtotalamount = state.totalAmount - exisitingcartitem.price;
    let updateditems;
    if (exisitingcartitem.amount === 1) {
      updateditems = state.items.filter((item) => item !== exisitingcartitem);
    } else {
      exisitingcartitem.amount -= 1;
      updateditems = [...state.items];
      updateditems[exisitingcartitemindex] = exisitingcartitem;
    }
    return {items: updateditems, totalAmount: updatedtotalamount};
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartstate, dispatchcart] = useReducer(cartReducer, defaultCart);

  const additemtocart = (item) => {
    dispatchcart({type: "ADD_ITEM", item: item});
  };

  const removeitemcarthandler = (id) => {
    dispatchcart({type: "REMOVE_ITEM", id: id});
  };

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: additemtocart,
    removeItem: removeitemcarthandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
