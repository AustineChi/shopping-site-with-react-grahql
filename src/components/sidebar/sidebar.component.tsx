import { useReactiveVar } from "@apollo/client";

import { useGetCurrencies } from "../../hooks/useGetCurrencies";
import { setCart, setSelectedCurrency } from "../../common/cache";

import { ProductItem } from "../../common/interfaces/product-item.interface";
import { CartInterface } from "../../common/interfaces/cart.interface";

import { Box, Text } from "../../common/styles/main.styles";

import { ReactComponent as CloseSVG } from "../../images/back.svg";

import {
  Background,
  SidebarWrapper,
  SelectCurrencyWrapper,
  CloseSidebarIconWrapper,
} from "./sidebar.styles";
import CartItem from "../cart-item";

interface SidebarProps {
  handleSidebar: () => void;
  products: ProductItem[];
}
const Sidebar: React.FC<SidebarProps> = ({
  handleSidebar,
  products,
}: SidebarProps) => {
  const currencyList = useGetCurrencies();
  const cartItems: CartInterface[] = useReactiveVar(setCart);

  const selectedCurrency = useReactiveVar(setSelectedCurrency);

  function handleQuantity(id: number, type: string) {
    if (type === "increment") {
      setCart().find((item: CartInterface) => item.id === id).quantity += 1;
      setCart([...cartItems]);
    }

    if (type === "decrement") {
      setCart().find((item: CartInterface) => item.id === id).quantity -= 1;
      setCart([...cartItems]);
    }
  }

  function deleteItem(id: number) {
    setCart(
      [...setCart()].filter((cartItem: CartInterface) => cartItem.id !== id)
    );
  }

  return (
    <>
      <Background />

      <SidebarWrapper>
        <div>
          <Box justifyContent="center" alignItems="center">
            <Text padding="16px 0">My Shopping Cart</Text>
          </Box>
          <Box justifyContent="space-between" alignItems="center" height="54px">
            <CloseSidebarIconWrapper onClick={handleSidebar}>
              <CloseSVG />
            </CloseSidebarIconWrapper>
            <SelectCurrencyWrapper>
              <select
                onChange={(e) => setSelectedCurrency(e.target.value)}
                name="currency-dropdown"
              >
                {currencyList?.map((currency: string, id: number) => (
                  <option key={id} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </SelectCurrencyWrapper>
          </Box>

          {products
            .filter((data) =>
              cartItems.some((cartItem) => cartItem.id === data.id)
            )
            ?.map((item: ProductItem) => (
              <CartItem
                key={item?.id}
                id={item?.id}
                title={item?.title}
                subTitle={"product description"}
                price={item?.price}
                image_url={item?.image_url}
                selectedCurrency={selectedCurrency}
                quantity={cartItems.find((x) => x.id === item?.id)?.quantity}
                handleQuantity={handleQuantity}
                deleteItem={deleteItem}
              />
            ))}
        </div>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
