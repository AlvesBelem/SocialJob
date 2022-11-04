import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: grid;

  grid-area: header;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  background-color: var(--purple-100);

  justify-items: center;

  .top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
