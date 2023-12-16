import styled from "styled-components";

export const ContactsFormEl = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 15px;
  letter-spacing: 0.05em;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ContactsNameInput = styled.input`
  padding: 0.7em 1.4em 0.7em 1.1em;
  border-radius: 20px;
  border: 2px solid #000000;
  transition: border 300ms ease-in-out;

  &:focus {
    outline: none;
    border-color: rgba(20, 167, 62, 1);
  }
`;

export const ContactsNumberInput = styled.input`
  padding: 0.7em 1.4em 0.7em 1.1em;
  border-radius: 20px;
  border: 2px solid #000000;
  transition: border 300ms ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid rgba(20, 167, 62, 1);
  }
`;

export const Label = styled.label`
  margin-bottom: -10px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;

  font-weight: 700;
  font-size: 16px;
  width: 35%;
  width: 170px;
  height: 50px;
  margin-top: 20px;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  letter-spacing: 0.05em;
  border-radius: 20em;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  cursor: pointer;
  border: none;
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
