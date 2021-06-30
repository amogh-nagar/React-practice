import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
// import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onokay} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer classname={styles.actions}>
        <Button onClick={props.onokay}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      <Backdrop onokay={props.onokay}/>
      <ModalOverlay title={props.title} message={props.message} onokay={props.onokay}/>
    </>
  );
};

export default ErrorModal;
