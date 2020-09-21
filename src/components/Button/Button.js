import React from "react";
import styled from "styled-components";
import { media, space, fontSizes } from "../../utils/theme";

const Button = ({
  callback,
  text,
  backgroundColor,
  borderColor,
  textColor,
  widthMobile,
  widthDesktop,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      onClick={() => callback && callback(true)}
      widthMobile={widthMobile}
      widthDesktop={widthDesktop}
    >
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  padding: ${space[3]} ${space[0]};
  cursor: pointer;
  width: 100%;
  font-size: ${fontSizes[1]};
  ${(props) => props.backgroundColor && `background: ${props.backgroundColor}`};
  ${(props) => props.borderColor && `border: 1px solid ${props.borderColor}`};
  ${(props) => props.textColor && `color: ${props.textColor}`};
  ${(props) =>
    props.widthMobile &&
    `
        width: ${props.widthMobile}px;
        margin: 0 auto;
        display: block;
  `}
  ${media.desktop`
    ${(props) =>
      props.widthDesktop &&
      `
        width: ${props.widthDesktop}px;
        margin: 0 auto;
        display: block;
  `}
  `};
`;

export default Button;
