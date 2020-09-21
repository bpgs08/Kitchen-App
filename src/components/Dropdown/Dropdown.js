import React from "react";
import styled from "styled-components";
import { media, colors, space, fontSizes } from "../../utils/theme";
import DropdownArrow from "./arrow.svg";

const Dropdown = ({ filterHandler, stateChange, dataArray }) => {
  return (
    <Select
      onChange={(e) => filterHandler(e, stateChange)}
      DropdownArrow={DropdownArrow}
    >
      {dataArray.map((el) => {
        return (
          <option key={el} value={el}>
            {el}
          </option>
        );
      })}
    </Select>
  );
};

const Select = styled.select`
  font-size: ${fontSizes[1]};
  line-height: 18px;
  color: ${colors.grey2};
  width: 100%;
  height: 45px;
  padding: 0 ${space[1]};
  border: 1px solid ${colors.grey3};
  appearance: none;
  ${(props) =>
    props.DropdownArrow && `background-image: url(${DropdownArrow})`};
  background-repeat: no-repeat;
  background-position: calc(100% - ${space[3]});
  cursor: pointer;
  ${media.tablet`
    width: 200px;
  `}
  ${media.desktop`
    width: 250px;
  `}
`;

export default Dropdown;
