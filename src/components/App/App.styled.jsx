import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  outline: 1px solid black;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1300px;
  }
`;

export const ContactsSection = styled.div`
  margin-top: 30px;
  padding: 35px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
