import styled from "styled-components";

export const ContactsFormEl = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  letter-spacing: 0.05em;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ContactsNameInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #000000;

  &:focus {
    outline: none;
    border-color: rgba(20, 167, 62, 1);
  }
`;

export const Label = styled.label`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.07px;
`;

export const ContactsNumberInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #000000;

  &:focus {
    outline: none;
    border: 2px solid rgba(20, 167, 62, 1);
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
  font-weight: 700;
  font-size: 16px;
  width: 65%;
  padding: 0.7em 1.4em 0.7em 1.1em;
  margin-top: 21px;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  transition: box-shadow 300ms linear;

  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  @media screen and (min-width: 428px) {
    /* width: 175%; */
  }

  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;
