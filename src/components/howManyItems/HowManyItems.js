import React from "react";
import styled from "styled-components";
import { media, space, fontSizes } from "../../utils/theme";

const HowManyItems = ({ numOfItems, productsLength }) => {
  return (
    <>
      {numOfItems && productsLength && (
        <Container>{`(1-${numOfItems} of ${productsLength} Items)`}</Container>
      )}
    </>
  );
};

const Container = styled.div`
  margin-top: ${space[2]};
  text-align: right;
  font-size: ${fontSizes[0]};
  ${media.phoneLandscape`
    margin-right: ${space[3]};
  `}
`;

export default HowManyItems;
