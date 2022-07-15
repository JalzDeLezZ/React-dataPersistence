import ReactDOM from "react-dom";
import './styles/Modal.scss';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};
export { Modal };

// function Modal({children}) {
//   return ReactDOM.createPortal(
//     children,
//     document.getElementById('modal')
//   );
// }
