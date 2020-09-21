import React from "react";
import styled from "styled-components";
import { media, colors, space, fontSizes } from "../../utils/theme";
import Button from "../Button";
import Accordian from "../Accordian";
import Dropdown from "../Dropdown";
import XMark from "./xMark.svg";

const Filters = ({ filterHandler, viewPort, showModal, setShowModal }) => {
  const renderModal = (setShowModal, filterHandler, applianceType) => {
    return (
      <ModalContainer>
        <ModalWrapper>
          <ModalFlex>
            <ModalTitle>Sort & Filter</ModalTitle>
            <ModalX onClick={() => setShowModal(false)} src={XMark} />
          </ModalFlex>
          <ModalHR />
          <ModalLabel>Sort by:</ModalLabel>
          <Dropdown
            filterHandler={filterHandler}
            stateChange={"appliance"}
            dataArray={applianceType}
          />
          <ModalLabel>Filter By</ModalLabel>
          <ModalButtonContainer>
            <Button
              text="CLEAR ALL"
              backgroundColor={colors.white}
              borderColor={colors.grey}
              textColor={colors.green}
            />
            <Button
              text="APPLY"
              backgroundColor={colors.grey4}
              borderColor={colors.grey}
              textColor={colors.green}
            />
          </ModalButtonContainer>
          <AccordianContainer>
            <Accordian text="Appliance Type">
              Appliance Type Checkboxes
            </Accordian>
            <Accordian text="Delivery Type">
              Delivery Type Radio Button
            </Accordian>
          </AccordianContainer>
        </ModalWrapper>
      </ModalContainer>
    );
  };

  const applianceType = [
    "None",
    "Cooktop",
    "Dishwasher",
    "Microwave",
    "Range",
    "Range Hood",
    "Refrigerator",
    "Wall Oven",
  ];

  const sortByType = ["None", "Highest Price", "Lowest Price"];
  return (
    <Container>
      {viewPort === "desktop" ? (
        <DesktopFilterContainer>
          <div>
            <DesktopFilterLabel>Select Appliances</DesktopFilterLabel>
            <Dropdown
              filterHandler={filterHandler}
              stateChange={"appliance"}
              dataArray={applianceType}
            />
          </div>
          <LabelDivide>
            <DesktopFilterLabel>Sort By:</DesktopFilterLabel>
            <Dropdown
              filterHandler={filterHandler}
              stateChange={"sortBy"}
              dataArray={sortByType}
            />
          </LabelDivide>
          {/* <LabelDivide>
            <DesktopFilterLabel>Delivery Method</DesktopFilterLabel>
            <input type="checkbox" id="deliveryMethod" name="deliveryMethod" />
            <label for="deliveryMethod">Quick Ship</label>
          </LabelDivide> */}
          {/* <div>clear all</div> */}
        </DesktopFilterContainer>
      ) : (
        <div>
          {showModal && renderModal(setShowModal, filterHandler, applianceType)}
          <ButtonContainer>
            <Button
              callback={setShowModal}
              text="SORT & FILTER"
              backgroundColor={colors.buttonBackground}
              borderColor={colors.buttonBorder}
              textColor={colors.blue}
            />
          </ButtonContainer>
        </div>
      )}
    </Container>
  );
};

const LabelDivide = styled.div`
  margin-left: ${space[6]};
  display: flex;
  align-items: center;
`;

const DesktopFilterLabel = styled.label`
  margin-right: ${space[3]};
`;

const DesktopFilterContainer = styled.div`
  display: flex;
  background: ${colors.buttonBackground};
  width: 100%;
  padding: ${space[4]} ${space[7]};
`;

const ButtonContainer = styled.div`
  ${media.phoneLandscape`
    margin: ${space[0]} ${space[3]};
  `}
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  ${media.tablet`
    position: relative;  
    display: flex;
  `}
`;

const ModalTitle = styled.h1`
  font-size: ${fontSizes[3]};
  font-weight: normal;
`;

const ModalWrapper = styled.div`
  margin: ${space[6]} ${space[3]};
`;

const ModalFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space[2]};
`;

const ModalX = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

const ModalHR = styled.hr`
  border: 1px solid #f0eded;
`;

const ModalLabel = styled.label`
  margin-top: ${space[6]};
  margin-bottom: ${space[2]};
  display: block;
`;

const ModalButtonContainer = styled.div`
  button:first-child {
    width: calc(50% - ${space[3]});
    margin-right: ${space[6]};
  }
  button:last-child {
    width: calc(50% - ${space[3]});
  }
`;

const AccordianContainer = styled.div`
  margin-top: ${space[5]};
`;

export default Filters;
