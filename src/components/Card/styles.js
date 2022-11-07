import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(0.25turn, #f2b720, #fdb804, #ffb800, #ffd978) border-box;
  border-radius: 30px;
  border: 4px solid transparent;
  margin: 10px;
  width: ${({ sizeX }) => sizeX || "90%"};
  max-width: ${({ maxSizeX }) => maxSizeX || "854px"};
  height: ${({ sizeY }) => sizeY || "80vh"};
  max-height: ${({ maxSizeY }) => maxSizeY || "900px"};

  img {
    width: calc(25vh);
    height: calc(25vh);
    border-radius: 30px;
  }
`;
