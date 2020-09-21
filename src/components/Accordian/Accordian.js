import React, { useState } from "react";
import styled from "styled-components";
import { colors, space } from "../../utils/theme";
import Minus from "./minus.svg";
import Plus from "./plus.svg";

const Accordian = ({ text, children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <AccordianContainer opened={opened}>
      <AccordianTopSection
        onClick={(prev) =>
          setOpened((prev) => {
            return !prev;
          })
        }
      >
        <div>{text}</div>

        <AccordianIcon src={opened ? Minus : Plus} />
      </AccordianTopSection>

      {opened && <AccordianBottomSection>{children}</AccordianBottomSection>}
    </AccordianContainer>
  );
};

const AccordianIcon = styled.img`
  margin-left: auto;
`;

const AccordianContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${space[3]};
  padding-bottom: ${space[3]};
  ${(props) =>
    !props.opened && `border-bottom: 1px solid ${colors.buttonBorder}`};
`;

const AccordianTopSection = styled.div`
  display: flex;
  cursor: pointer;
`;

const AccordianBottomSection = styled.div`
  margin-top: ${space[5]};
`;

export default Accordian;
