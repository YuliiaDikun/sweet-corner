import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { ModalWrapper, ModalTitle, LoginLink, ModalCloseBtn } from "./Modal.styled";
import { Backdrop } from "../";
const Modal = ({ onClose}) => {
  useEffect(() => {
    const onPressEsc = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onPressEsc);

    return () => {
      window.removeEventListener("keydown", onPressEsc);
      };
      // eslint-disable-next-line
  }, []);
  return (
    <Backdrop onClick={onClose}>
      <ModalWrapper>
        <ModalCloseBtn onClick={onClose}>
          <RxCross1 size={20} />
        </ModalCloseBtn>
        <ModalTitle>You must be login!</ModalTitle>
        <LoginLink to="/login">Log in</LoginLink>
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
