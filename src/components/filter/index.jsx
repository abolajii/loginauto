import MinSlider from "../slider/min.slider";
import MinmaxSlider from "../slider/minmax.slider";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: #f686bd;
`;

const Inner = styled.div`
  height: 700px;
  width: 1100px;
  border: 1px solid red;
  margin: auto;
  background: #f4bbd3;
  border-radius: 15px;
`;

const FilterBox = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background: #f3f3f3;
  cursor: pointer;
  border: none;
`;

const ToolTip = styled.div`
  height: 50px;
  width: 50px;
  background: #fff;
  cursor: pointer;
  position: absolute;
  left: 50%;

  transform: translateX(-50%) rotate(45deg);
  top: 65px;
`;

const FilterDropDown = styled.div`
  height: 300px;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  top: 65px;
`;

const Close = styled.div`
  height: 30px;
  width: 30px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
`;
const Box = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;

const Filter = () => {
  const [showDropDown, setShowDropDown] = React.useState(false);

  const checkCurrentTarget = (e) => {
    setShowDropDown(false);
  };

  return (
    <Container className="center">
      <Inner className="p1">
        <div className="flex ai-center jc-space-btw">
          <div />
          <Box>
            <FilterBox
              className="button"
              onClick={(e) => {
                setShowDropDown(!showDropDown);
              }}
            />

            {showDropDown && (
              <>
                <ToolTip />
                <FilterDropDown className="dropdown">
                  <div className="flex ai-center jc-space-btw p1">
                    <p>Filter</p>
                    <Close
                      className="center close-button"
                      onClick={(e) => {
                        checkCurrentTarget(e);
                      }}
                    >
                      x
                    </Close>
                  </div>

                  <MinmaxSlider />
                  <MinSlider />
                </FilterDropDown>
              </>
            )}
          </Box>
        </div>
      </Inner>
    </Container>
  );
};

export default Filter;
