import {useRef, useReducer} from "react";
import styles from "./CheckOut.module.css";

const isempty = (value) => value.trim() === "";
const isnot5chars = (value) => value.trim().length < 5;

const enteredfields = (state, action) => {
  if (action.type === "VALIDITY") {
    console.log(action);
    return {
      name: action.value.name,
      street: action.value.street,
      postal: action.value.postal,
      city: action.value.city,
    };
  }

  return {
    name: state.name,
    street: state.street,
    postal: state.postal,
    city: state.city,
  };
};

const CheckOut = (props) => {
  const [fieldsinput, dispatch] = useReducer(enteredfields, {
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameinputref = useRef();
  const streetinputref = useRef();
  const postalinputref = useRef();
  const cityinputref = useRef();

  const confirmhandler = (e) => {
    e.preventDefault();

    const enteredname = nameinputref.current.value;
    const enteredstreet = streetinputref.current.value;
    const enteredpostal = postalinputref.current.value;
    const enteredcity = cityinputref.current.value;

    const enterednameisvalid = !isempty(enteredname);
    const enteredstreetisvalid = !isempty(enteredstreet);
    const enteredpostalisvalid = !isnot5chars(enteredpostal);
    const enteredcityisvalid = !isempty(enteredcity);

    dispatch({
      type: "VALIDITY",
      value: {
        name: enterednameisvalid,
        street: enteredstreetisvalid,
        postal: enteredpostalisvalid,
        city: enteredcityisvalid,
      },
    });

    const formisvalid =
      enterednameisvalid &&
      enteredcityisvalid &&
      enteredpostalisvalid &&
      enteredstreetisvalid;

    if (!formisvalid) {
      return;
    }
    //submit the cart data

    props.onsubmitorder({
      name: enteredname,
      street: enteredstreet,
      postal: enteredpostal,
      coty: enteredcity,
    });
  };

  return (
    <form className={styles.form} action="" onSubmit={confirmhandler}>
      <div
        className={`${styles.control} ${
          !fieldsinput.name ? styles.invalid : ""
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input ref={nameinputref} type="text" id="name" />
        {!fieldsinput.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${styles.control} ${
          !fieldsinput.street ? styles.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetinputref} type="text" id="street" />
        {!fieldsinput.street && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${styles.control} ${
          !fieldsinput.postal ? styles.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal code</label>
        <input ref={postalinputref} type="text" id="postal" />
        {!fieldsinput.postal && <p>Please enter a valid postal</p>}
      </div>
      <div
        className={`${styles.control} ${
          !fieldsinput.city ? styles.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityinputref} type="text" id="city" />
        {!fieldsinput.city && <p>Please enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.hidecheckout}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
