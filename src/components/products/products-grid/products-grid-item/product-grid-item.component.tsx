import { useReactiveVar } from "@apollo/client";

import { setSelectedCurrency, setCart } from "../../../../common/cache";

import { ProductItem } from "../../../../common/interfaces/product-item.interface";
import { CartInterface } from "../../../../common/interfaces/cart.interface";
import {
  ProductItemWrapper,
  Container,
  ProductImageWrapper,
  ProductTitle,
  ProductPrice,
  AddItemButton,
} from "./product-grid-item.styles";

interface ProductGridItemProps {
  product: ProductItem;
  handleSidebar: () => void;
}

const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product,
  handleSidebar,
}: ProductGridItemProps) => {
  const selectedCurrency = useReactiveVar(setSelectedCurrency);

  return (
    <ProductItemWrapper>
      <Container>
        <ProductImageWrapper>
          <img
            src={
              product?.image_url ||
              "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"
            }
            alt={product?.title}
          />
        </ProductImageWrapper>
        <ProductTitle>{product?.title}</ProductTitle>
        <ProductPrice>{`${selectedCurrency} ${product?.price}`}</ProductPrice>
        <AddItemButton
          onClick={() => {
            const cartItems = [...setCart()];
            if (
              setCart().find((item: CartInterface) => item.id === product.id)
            ) {
              const cartItems = [...setCart()];
              cartItems.find(
                (item: CartInterface) => item.id === product.id
              ).quantity += 1;
              setCart([...cartItems]);
            } else {
              setCart([{ id: product.id, quantity: 1 }, ...cartItems]);
            }

            handleSidebar();
          }}
        >
          Add to Cart
        </AddItemButton>
      </Container>
    </ProductItemWrapper>
  );
};

export default ProductGridItem;
