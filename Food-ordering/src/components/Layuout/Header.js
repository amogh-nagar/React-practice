import mealseImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React meals</h1>
        <HeaderCartButton cartshow={props.showcart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealseImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
