import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  min-width: 300px;
  margin: 0 auto;
  padding: 0 auto;
  @media screen and (max-width: 720px) {
    display: block;
  }
`;

;