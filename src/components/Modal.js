import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux-store/redux-slice/cartSlice';
import { closedModal } from '../redux-store/redux-slice/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
    dispatch(closedModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove All Items from Shopping cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={clearCartHandler}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closedModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
