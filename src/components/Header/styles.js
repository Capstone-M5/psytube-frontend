import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  box-sizing: border-box;
  height: 110px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(0.25turn, #f2b720, #fdb804, #ffb800, #ffd978);
  border-image-slice: 1;
  padding: 0 1rem;

  @media (min-width: 450px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 600px) {
    padding: 0 2rem;
  }
`;

export const StyledDivTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Audiowide", cursive;
    font-size: 35px;
    width: 3rem;
    color: #ffffff;
  }

  @media (min-width: 500px) {
    width: 50%;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const StyledDivLink = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 15px;
  }

  p {
    font-size: 15px;
    font-family: "Sarpanch", sans-serif;
    cursor: pointer;
    color: #fdb804;
    font-weight: 700;
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    flex-direction: row;

    h2 {
      font-size: 20px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (min-width: 1000px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 22px;
    }
  }
`;
