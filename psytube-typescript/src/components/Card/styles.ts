import styled from "styled-components";
import { iCardProps } from "../../interfaces";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(0.25turn, #f2b720, #fdb804, #ffb800, #ffd978) border-box;
  border-radius: 30px;
  border: 4px solid transparent;
  margin: 10px;
  width: ${({ sizeX }: iCardProps) => sizeX || "90%"};
  max-width: ${({ maxSizeX }: iCardProps) => maxSizeX || "854px"};
  height: ${({ sizeY }: iCardProps) => sizeY || "80vh"};
  max-height: ${({ maxSizeY }: iCardProps) => maxSizeY || "900px"};

  img {
    width: calc(25vh);
    height: calc(25vh);
    border-radius: 30px;
  }
`;
