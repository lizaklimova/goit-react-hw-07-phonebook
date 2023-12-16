import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;

  @media screen and (min-width: 428px) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  width: 100%;
  height: auto;
`;

export const NoContactsMsg = styled.p`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
