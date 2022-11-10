import styled from "styled-components";
import { iButtonProps } from "../../interfaces";

export const ButtonCM = styled.button`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-weight: 600;
  font-size: ${({ nameSize }: iButtonProps) => nameSize};

  background: radial-gradient(
        circle at 100% 100%,
        #1e1e1e 0,
        #1e1e1e 18px,
        transparent 18px
      )
      0% 0%/20px 20px no-repeat,
    radial-gradient(circle at 0 100%, #1e1e1e 0, #1e1e1e 18px, transparent 18px)
      100% 0%/20px 20px no-repeat,
    radial-gradient(circle at 100% 0, #1e1e1e 0, #1e1e1e 18px, transparent 18px)
      0% 100%/20px 20px no-repeat,
    radial-gradient(circle at 0 0, #1e1e1e 0, #1e1e1e 18px, transparent 18px)
      100% 100%/20px 20px no-repeat,
    linear-gradient(#1e1e1e, #1e1e1e) 50% 50% / calc(100% - 4px)
      calc(100% - 40px) no-repeat,
    linear-gradient(#1e1e1e, #1e1e1e) 50% 50% / calc(100% - 40px)
      calc(100% - 4px) no-repeat,
    linear-gradient(90deg, #ffb700 79%, #ffd978 100%);
  border-radius: 20px;
  padding: 6px;
  box-sizing: border-box;

  border: 0.5px;

  font-family: "Sarpanch", sans-serif;
  color: #fff;

  height: ${({ sizeY }: iButtonProps) => sizeY};
  width: ${({ size }: iButtonProps) => size};

  img {
    height: 28px;
    width: 28px;
  }

  &:active {
    opacity: 0.8;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.4);
  }
`;
