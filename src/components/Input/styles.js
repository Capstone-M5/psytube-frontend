import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border: 2px;
  background: radial-gradient(
        circle at 100% 100%,
        #1d1d1d 0,
        #1d1d1d 18px,
        transparent 18px
      )
      0% 0%/20px 20px no-repeat,
    radial-gradient(circle at 0 100%, #1d1d1d 0, #1d1d1d 18px, transparent 18px)
      100% 0%/20px 20px no-repeat,
    radial-gradient(circle at 100% 0, #1d1d1d 0, #1d1d1d 18px, transparent 18px)
      0% 100%/20px 20px no-repeat,
    radial-gradient(circle at 0 0, #1d1d1d 0, #1d1d1d 18px, transparent 18px)
      100% 100%/20px 20px no-repeat,
    linear-gradient(#1d1d1d, #1d1d1d) 50% 50% / calc(100% - 4px)
      calc(100% - 40px) no-repeat,
    linear-gradient(#1d1d1d, #1d1d1d) 50% 50% / calc(100% - 40px)
      calc(100% - 4px) no-repeat,
    linear-gradient(
        90deg,
        rgba(255, 183, 0, 0.69) 0%,
        rgba(255, 184, 0, 0.6) 33%,
        rgba(253, 184, 4, 0.8) 66%,
        rgba(255, 217, 120, 0.79) 100%
      )
      no-repeat;
  border-radius: 20px;
  padding: 17px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
  caret-color: white;
  color: white;
`;
