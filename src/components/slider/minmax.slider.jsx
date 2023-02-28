import React from "react";
import styled from "styled-components";

const RangeInput = styled.input`
  pointer-event: auto;
  position: absolute;
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
  background: ${({ value }) => {
    return `linear-gradient(to right, #dadae5 ${value[0]}%, #F686BD  ${value[0]}% ,#F686BD  ${value[1]}%, #dadae5 ${value[1]}%)`;
  }}};
`;

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MinmaxSlider = () => {
  const [minMax, setMinMax] = React.useState([50, 70]);
  const gap = 10;

  React.useEffect(() => {}, []);

  return (
    <div>
      <div>
        {minMax[0]} - {minMax[1]}
      </div>
      <Container>
        <p></p>
        <SliderTrack value={minMax} />
        <RangeInput
          type="range"
          min="0"
          max="100"
          step="1"
          value={minMax[0]}
          onChange={(e) => {
            if (minMax[1] - parseInt(e.target.value) >= gap) {
              setMinMax([parseInt(e.target.value), minMax[1]]);
            }
          }}
        />
        <RangeInput
          type="range"
          min="0"
          max="100"
          step="1"
          value={minMax[1]}
          onChange={(e) => {
            // console.log(parseInt(e.target.value), minMax[0]);
            if (parseInt(e.target.value) - minMax[0] >= gap) {
              // setMinMax([parseInt(e.target.value), minMax[1]]);
              setMinMax([minMax[0], parseInt(e.target.value)]);
            }
          }}
        />
      </Container>
    </div>
  );
};

export default MinmaxSlider;
