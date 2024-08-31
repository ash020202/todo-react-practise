import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white rounded p-4">
        {children}
        <form action="dialog">
          <button className="text-red-500">Close</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
