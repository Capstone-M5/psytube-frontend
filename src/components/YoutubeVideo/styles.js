import styled from "styled-components";

export const VideoBox = styled.div`
  border: 3px;
  background: linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 6px)
      calc(100% - 6px) no-repeat,
    linear-gradient(52deg, #fdb804 0%, #ffb800 40%, #ffb700 69%, #ffd978 80%);
  border-radius: 0px;
  padding: 3px;
  box-sizing: border-box;
  overflow: hidden;

  padding: 3px 7px 7px 3px;

  div {
    width: 95vw;
    min-width: 293px;
    max-width: 580px;
  }
  div div {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
  }

  @media (min-width: 900px) {
    div {
      width: 70vw;
    }
  }

  @media (min-width: 1150px) {
    div {
      width: 60vw;
      max-width: 60vw;
    }
  }

  /*@media (min-width: 1200px) {
    div {
      max-width: 1000px;
    }
  }*/
`;

export const IframeVideo = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
