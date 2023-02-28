import React from "react";
import styled from "styled-components";

const RangeInput = styled.input`
  pointer-event: auto;
  position: absolute;
  border: none;
  outline: none;
  width: 100%;
  appearance: none;
  pointer-events: none;
  background: transparent;

  ::-webkit-slider-thumb {
    appearance: none;

    pointer-events: auto;
    height: 1.7em;
    width: 1.7em;
    cursor: pointer;
    background: #fe5d9f;
    border-radius: 10px;
  }

  ::-webkit-slider-runnable-track {
    appearance: none;
  }
`;

const SliderTrack = styled.div`
  height: 5px;
  width: 100%;
  background: ${({ x }) => {
    return `linear-gradient(to right, #dadae5 0%, #F686BD  0% ,#F686BD  ${x}%, #dadae5 0%)`;
  }}};

`;

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MinSlider = () => {
  const [min, setMin] = React.useState(20);

  return (
    <>
      <p>{min}</p>
      <Container>
        <SliderTrack x={min} />
        <RangeInput
          type="range"
          min="0"
          max="100"
          step="1"
          value={min}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
      </Container>
    </>
  );
};

export default MinSlider;
