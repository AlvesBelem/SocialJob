import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: grid;
  grid-area: header;

  grid-auto-rows: auto;
  grid-template-columns: 1fr;

  background-color: var(--purple-100);

  justify-items: center;
  align-items: center;

  .top {
    width: 100%;
    max-width: 1080px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    height: 150px;
    grid-template-areas: "dev logo register";

    justify-items: center;
    align-items: center;

    @media (max-width: 480px) {
      grid-template-columns:
        "logo logo logo"
        "dev dev dev"
        "register register register";
    } 

    .dev {
      grid-area: dev;
    }

    .logo {
      grid-area: logo;
    }

    .register {
      grid-area: register;
    }

    span {
      color: var(--purple-200);
      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: 0.85rem;

      a {
        color: var(--purple-200);
        font-weight: 700;
        text-decoration: none;
      }

      img {
        max-width: 179px;
      }
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
    max-width: 638px;
    width: 100%;
    text-align: center;
    align-items: center;
    padding-bottom: 3rem;

    span {
      color: var(--purple-200);
      letter-spacing: 1px;
    }
  }
`;
