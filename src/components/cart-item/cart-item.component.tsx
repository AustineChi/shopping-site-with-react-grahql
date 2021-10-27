import { ReactComponent as CancelSVG } from "../../images/cancel.svg";

import {
  CancelIconWrapper,
  ControlButton,
  ProductImageWrapper,
} from "./cart-item.styles";
import { Box, Text } from "../../common/styles/main.styles";

interface PageDescriptionProps {
  id: number;
  title: string;
  subTitle: string;
  selectedCurrency: String;
  price: number;
  quantity?: number;
  image_url: string;
  handleQuantity: (val: number, type: string) => void;
  deleteItem: (val: number) => void;
}

const CartItem: React.FC<PageDescriptionProps> = ({
  id,
  title,
  subTitle,
  selectedCurrency,
  price,
  quantity,
  image_url,
  handleQuantity,
  deleteItem,
}: PageDescriptionProps) => {
  return (
    <Box bgColor="white" padding="0.75rem" margin="0.5rem 0" column>
      <Box justifyContent="space-between">
        <Text lineHeight="0.9375rem" fontSize="0.875rem" fontWeight="400">
          {title}
        </Text>
        <CancelIconWrapper onClick={() => deleteItem(id)}>
          <CancelSVG />
        </CancelIconWrapper>
      </Box>
      <Box
        justifyContent="space-between"
        alignItems="flex-start"
        padding=".5rem 0"
      >
        <Box column>
          <Text
            lineHeight="1.03rem"
            fontSize="0.6875rem"
            fontWeight="400"
            opacity="0.8"
          >
            {subTitle}
          </Text>
          <Box
            padding=".25rem 0"
            justifyContent="space-between"
            alignItems="center"
            width="90%"
          >
            <Box
              width="70px"
              alignItems="center"
              justifyContent="space-between"
              border=" 1px solid rgb(226, 230, 227)"
            >
              <ControlButton onClick={() => handleQuantity(id, "decrement")}>
                -
              </ControlButton>
              <p>{quantity}</p>
              <ControlButton onClick={() => handleQuantity(id, "increment")}>
                +
              </ControlButton>
            </Box>
            <Text
              lineHeight="1.3125rem"
              fontSize="0.875rem"
              fontWeight="400"
              opacity="0.8"
            >
              {`${selectedCurrency} ${price * (quantity || 1)}`}
            </Text>
          </Box>
        </Box>
          <ProductImageWrapper>
            <img src={image_url} alt={title} />
          </ProductImageWrapper>
      </Box>
    </Box>
  );
};

export default CartItem;
