import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  box-sizing: border-box;
  height: ${(props) => props.heigth || "90px"};
  background-image: linear-gradient(to right, #181818, #505050);
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(0.25turn, #f2b720, #fdb804, #ffb800, #ffd978);
  border-image-slice: 1;
  padding: 0 1rem;

  & h1 {
    font-family: "Audiowide", cursive;
    width: 3rem;
    color: #ffffff;
    cursor: pointer;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.1rem;
  }

  @media (min-width: 350px) {
    & div {
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media (min-width: 600px) {
    padding: 0 2rem;
  }
`;
