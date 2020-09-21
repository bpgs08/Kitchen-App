import React, { useState } from "react";
import styled from "styled-components";
import Filters from "../../components/filters";
import ProductList from "../../components/productList";
import HowManyItems from "../../components/howManyItems";
import { colors, space, fontSizes, media } from "../../utils/theme";
import Button from "../../components/Button";

let Home = ({ products, filterHandler, viewPort, showMoreHelper }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <AppContainer className="App">
      <Title>Appliance Packages</Title>
      <Paragraph>
        Looking for a great deal on home appliances? Packages are the best bet.
        Most appliance packages consist of a range, refrigerator, over-the-range
        microwave, and dishwasher. However, some upscale brands have packages
        that incorporate wall ovens, cooktops, and integrated refrigerators.
      </Paragraph>
      <Filters
        filterHandler={filterHandler}
        viewPort={viewPort}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {viewPort === "mobile" && (
        <HowManyItems
          numOfItems={products.numOfItems}
          productsLength={products.items.currentProducts?.length}
        />
      )}
      {(!showModal || viewPort === "desktop") && (
        <ProductList
          currentProducts={products?.items?.currentProducts}
          numOfItems={products.numOfItems}
        />
      )}
      {products.numOfItems !== products.items.currentProducts?.length &&
        products.items.currentProducts && (
          <Button
            text="SHOW MORE"
            backgroundColor={colors.white}
            borderColor={colors.grey}
            textColor={colors.green}
            widthMobile="215"
            widthDesktop="416"
            callback={showMoreHelper}
          />
        )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: ${space[7]} ${space[3]};
  ${media.phoneLandscape`
    padding: ${space[12]} ${space[0]};
  `}
`;

const Title = styled.h1`
  font-size: ${fontSizes[3]};
  font-weight: normal;
  margin-bottom: ${space[3]};
  ${media.phoneLandscape`
    padding: ${space[0]} ${space[3]};
  `}
  ${media.tablet`
    padding: ${space[0]} ${space[6]};
    font-size: ${fontSizes[4]};
  `}
`;

const Paragraph = styled.p`
  font-size: ${fontSizes[0]};
  margin-bottom: ${space[4]};
  ${media.phoneLandscape`
    padding: ${space[0]} ${space[3]};
  `}
  ${media.tablet`
    padding: ${space[0]} ${space[6]};
    font-size: ${fontSizes[2]};
  `}
`;

export default Home;
