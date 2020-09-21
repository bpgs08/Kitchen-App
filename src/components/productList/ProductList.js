import React from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";
import { colors, space, fontSizes, media } from "../../utils/theme";
import { NumberFormatter } from "../../utils/helpers";
import QuickShip from "./quickship-pdp.png";
import Button from "../Button";

const ProductList = ({ currentProducts, numOfItems }) => {
  return (
    <Container>
      {currentProducts?.slice(0, numOfItems).map((el) => {
        return (
          <Item key={el.sku}>
            <Image
              src={`https://assets.ajmadison.com/${el?.image?.folder}/${el?.image?.filename}.jpg`}
            />
            <ProductContainer>
              <FinalPrice>
                {NumberFormatter.format(el?.prices?.final)}
              </FinalPrice>
              <SavingsOriginal>
                <SavingsPrice>
                  Save {NumberFormatter.format(el?.prices?.final)}
                </SavingsPrice>
                <OriginalPrice>
                  {NumberFormatter.format(el?.prices?.final)}
                </OriginalPrice>
              </SavingsOriginal>

              <Description
                line={3}
                element="div"
                truncateText="…"
                text={el.description}
              />
              {/* Real logic for quickship image
              {el.is_quick_ship && <QuickShipImage src={QuickShip} />} */}
              <QuickShipImage src={QuickShip} />
              <ViewPackageContainer>
                <Button
                  text="VIEW PACKAGE"
                  backgroundColor={colors.grey4}
                  borderColor={colors.grey}
                  textColor={colors.green}
                />
              </ViewPackageContainer>
            </ProductContainer>
          </Item>
        );
      })}
    </Container>
  );
};

const ViewPackageContainer = styled.div`
  display: none;
  ${media.phoneLandscape`
    display: block;
    order: 4;
    button {
      padding: ${space[2]} ${space[0]};
    }
    margin-top: ${space[3]};
  `}
`;

const SavingsOriginal = styled.div`
  ${media.phoneLandscape`
    order: 3;
  `}
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.phoneLandscape`
    flex: 1;
  `}
`;

const QuickShipImage = styled.img`
  margin-top: ${space[3]};
  width: 73.19px;
  height: 15.63px;
  ${media.phoneLandscape`
    order: 1;
    padding-top: ${space[2]};
    margin-bottom: ${space[2]};
    margin-top: auto;
  `}
`;

const Description = styled(TextTruncate)`
  font-size: ${fontSizes[0]};
  margin-bottom: ${space[3]};
  ${media.phoneLandscape`
    order: 0;
  `}
`;

const FinalPrice = styled.div`
  color: ${colors.black};
  margin-bottom: ${space[1]};
  font-size: ${fontSizes[1]};
  font-weight: bold;
  ${media.phoneLandscape`
    order: 2;
  `}
`;

const SavingsPrice = styled.span`
  color: ${colors.green};
  font-size: ${fontSizes[0]};
  padding-right: ${space[1]};
`;

const OriginalPrice = styled.span`
  color: ${colors.grey};
  font-size: ${fontSizes[0]};
  text-decoration: line-through;
`;

const Image = styled.img`
  width: 157px;
  height: 144px;
  margin-right: ${space[6]};
  ${media.phoneLandscape`
    margin: 0 auto ${space[3]} auto;
  `}
`;

const Container = styled.div`
  margin-top: ${space[6]};
  ${media.phoneLandscape`
    display: flex;
    flex-wrap: wrap;
  `}
`;

const Item = styled.div`
  margin-bottom: ${space[5]};
  display: flex;
  ${media.phoneLandscape`
    flex-direction: column;
    flex-basis: 50%; 
    & > * {
      padding: ${space[0]} ${space[6]};
    }
  `}
  ${media.tablet`
    flex-basis: 33.3%; 
  `}
  ${media.desktop`
    flex-basis: 25%; 
  `}
`;

export default ProductList;
