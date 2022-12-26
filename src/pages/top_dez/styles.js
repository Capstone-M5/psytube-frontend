import styled from "styled-components";

export const StyledTop = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const StyledTitle = styled.div`
  margin: 2vh;
  display: flex;
  text-align: center;
`;

export const StyledDiv = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  img{
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  @media (min-width: 800px) {
    flex-wrap: wrap;
    flex-direction: row;
  }

`;
