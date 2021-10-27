import styled from "styled-components";
import { deviceSize } from "../../lib";

export const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0 2px 3px -3px grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 64px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin: 0;
  padding-top: 0.5rem;
  color: #000;
  border-bottom: 0;
  border-color: #292929;
}

  @media only screen and ${deviceSize.md} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

`;

export const LHS = styled.nav`
  display: flex;
  & > ul {
    display: flex;
    list-style-type: none;
    & > li {
      margin: 0.25rem 1.25rem;
      font-size: 14px;
      line-height: 17px;
      margin-right: 1.25rem;
      & > a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  width: auto;
  height: 20px;
  margin-right: 0rem;
  display: none;
  @media only screen and ${deviceSize.md} {
    display: inline-block;
    width: 163px;
    height: 44px;
    margin-right: 4rem;
  }

  & > img {
    height: 100%;
    object-fit: contain;
    max-width: 100%;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  & > img {
    width: 25px;
    min-width: 25px;
    height: 21px;
  }
  & > p {
    line-height: 0.5;
    font-weight: 400;
    font-size: 0.6875rem;
    font-size: 0.8125rem;
    margin-left: 1px;
    margin-bottom: 0.75rem;
  }
`;

export const SelectCurrencyWrapper = styled.div`
  height: fit-content;
  width: 84px;
  min-width: 84px;
  padding: 0;
  position: relative;
  top: initial;
  right: initial;
  left: initial;
  z-index: initial;
  margin-left: 1.5rem;
  & > select {
    height: 32px;
    font-size: 0.8125rem;
    width: 100%;
    outline: 0;
    position: relative;
    transition: all 0.2s;
    padding-top: 2px;
    padding-bottom: 1px;
    line-height: normal;
    padding-left: 0.5rem;
    border: 1px solid #cdd1ce;
    border-radius: 0;
    background: transparent;
    border-color: #acafad;
  }
`;
