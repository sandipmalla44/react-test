import './modal.css';

const Modal = ({ handleClose, displayModal }) => {
  const showModal = displayModal ? 'backdrop show' : 'backdrop hide';
  return (
    <div className={showModal}>
      <div className="modal">
        <div>This is a modal</div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal