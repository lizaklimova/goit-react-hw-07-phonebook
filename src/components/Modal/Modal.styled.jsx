import { styled } from "styled-components";
import { IoMdClose } from "react-icons/io";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(96, 93, 93, 0.444);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWin = styled.div`
  position: relative;
  background-color: #fff;
  padding: 45px;
  width: 140%;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 300ms ease-in-out, filter 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(-1px 1px 5px #000);
  }
`;

export const CloseIcon = styled(IoMdClose)`
  width: 50px;
  height: 50px;
  stroke: black;
`;
