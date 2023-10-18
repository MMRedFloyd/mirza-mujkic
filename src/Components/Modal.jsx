import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
