import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  appearance: none;
  width: 17px;
  height: 17px;
  border-radius: 10%;
  border: 2px solid black;
  outline: none;
  transition: 0.1s;
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &:checked {
    background-color: black;
    border-color: black;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 2px;
    width: 5px;
    height: 8px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
  }
`;

const Label = styled.label`
  font-size: 19px;
  font-family: "Jalnan";
  color: black;
  line-height: 1.7;
`;

function CheckBox({ checkboxes, onChange }) {
  return (
    <div>
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={onChange}
        />
        A 현저한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={onChange}
        />
        A 중대한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={onChange}
        />
        B 현저한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={onChange}
        />
        B 중대한 과실
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={onChange}
        />
        A 과속
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox6"
          checked={checkboxes.checkbox6}
          onChange={onChange}
        />
        B 과속
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox7"
          checked={checkboxes.checkbox7}
          onChange={onChange}
        />
        A 서행
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox8"
          checked={checkboxes.checkbox8}
          onChange={onChange}
        />
        B 서행
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox9"
          checked={checkboxes.checkbox9}
          onChange={onChange}
        />
        A 일방통행 위반
      </Label>
      <br />
      <Label>
        <StyledCheckbox
          type="checkbox"
          name="checkbox10"
          checked={checkboxes.checkbox10}
          onChange={onChange}
        />
        B 일방통행 위반
      </Label>
    </div>
  );
}

export default CheckBox;
