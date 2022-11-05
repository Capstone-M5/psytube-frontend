import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1d1d;
  width: 100%;
  min-height: 100vh;
`;

export const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  margin-top: 6vh;

  h1 {
    font-size: 30px;
    color: #fff;
  }
`;

export const Rodape = styled.div`
  min-height: 45px;
  max-height: 80px;
  background: #857103;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  font-size: clamp(8px, 6px + 2vw, 16px);
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  span {
    display: inline-block;
    text-align: justify;
  }
`;
