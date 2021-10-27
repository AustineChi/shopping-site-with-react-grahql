import { NavLink } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { useGetCurrencies } from "../../hooks/useGetCurrencies";
import { setSelectedCurrency, setCart } from "../../common/cache";
import { CartInterface } from "../../common/interfaces/cart.interface";

import logo from "../../images/logo.png";
import cart from "../../images/cart.png";

import {
  HeaderWrapper,
  LogoWrapper,
  SectionWrapper,
  LHS,
  CartWrapper,
  SelectCurrencyWrapper,
} from "./header.styles";
const Header: React.FC = () => {
  const currencyList = useGetCurrencies();
  const cartItems: CartInterface[] = useReactiveVar(setCart);

  return (
    <HeaderWrapper>
      <SectionWrapper>
        <LogoWrapper>
          <img src={logo} alt="logo" />
        </LogoWrapper>
        <LHS>
          <ul>
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/learn">Learn</NavLink>
            </li>
          </ul>
        </LHS>
      </SectionWrapper>
      <SectionWrapper>
        <CartWrapper>
          <img src={cart} alt="cart" />
          <p>
            {cartItems.reduce(
              (current, cartItem) => current + cartItem.quantity,
              0
            )}
          </p>
        </CartWrapper>
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
      </SectionWrapper>
    </HeaderWrapper>
  );
};

export default Header;
