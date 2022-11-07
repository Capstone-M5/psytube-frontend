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
    font-family: "Sarpanch", sans-serif;
    font-size: 30px;
    color: #fff;
    padding-bottom: 20px;
  }

  h3 {
    font-family: "Sarpanch", sans-serif;
    color: #fff;
  }

  & > div {
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 780px) {
      align-items: flex-start;
      justify-content: center;
      flex-direction: row;
    }

    & > div {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    section {
      width: 95%;
      height: 498px;
      max-width: 464px;
      border: 2px;
      background: radial-gradient(
            circle at 100% 100%,
            #1d1d1d 0,
            #1d1d1d 28px,
            transparent 28px
          )
          0% 0%/30px 30px no-repeat,
        radial-gradient(
            circle at 0 100%,
            #1d1d1d 0,
            #1d1d1d 28px,
            transparent 28px
          )
          100% 0%/30px 30px no-repeat,
        radial-gradient(
            circle at 100% 0,
            #1d1d1d 0,
            #1d1d1d 28px,
            transparent 28px
          )
          0% 100%/30px 30px no-repeat,
        radial-gradient(
            circle at 0 0,
            #1d1d1d 0,
            #1d1d1d 28px,
            transparent 28px
          )
          100% 100%/30px 30px no-repeat,
        linear-gradient(#1d1d1d, #1d1d1d) 50% 50% / calc(100% - 4px)
          calc(100% - 60px) no-repeat,
        linear-gradient(#1d1d1d, #1d1d1d) 50% 50% / calc(100% - 60px)
          calc(100% - 4px) no-repeat,
        linear-gradient(
          90deg,
          rgba(255, 183, 0, 0.69) 0%,
          rgba(255, 184, 0, 0.6) 33%,
          rgba(253, 184, 4, 0.8) 66%,
          rgba(255, 217, 120, 0.79) 100%
        );
      border-radius: 30px;
      padding: 12px;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      a {
        width: 60%;
      }

      img {
        width: 95%;
      }
    }
  }
`;

export const Rodape = styled.div`
  min-height: 45px;
  max-height: 80px;
  background-image: linear-gradient(
    to right,
    #ffb700,
    #ffb800,
    #fdb804,
    #ffd978
  );
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  font-family: "Sarpanch", sans-serif;
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
