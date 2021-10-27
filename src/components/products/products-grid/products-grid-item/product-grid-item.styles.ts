import styled from "styled-components";
import { deviceSize } from "../../../../lib";

export const ProductItemWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  background: rgb(226, 230, 227);
  padding: 3rem 2rem;
  max-width: 21.125rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const ProductImageWrapper = styled.div`
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  height: 100%;
  & > img {
    object-fit: contain;
    max-width: 100%;
    max-height: 170px;
    flex: 1 1 0%;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.7;
  margin: 0.5rem 0;
  @media only screen and ${deviceSize.sm} {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.7;
  margin: 0.5rem 0;
  @media only screen and ${deviceSize.sm} {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const AddItemButton = styled.button`
  display: flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  vertical-align: middle;
  outline: none;
  border: 0px;
  line-height: 1.2;
  padding-top: 2px;
  font-weight: 600;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 52px;
  background: rgb(75, 85, 72);
  color: rgb(252, 252, 249);
  width: 100%;
  max-width: 157px;
  white-space: normal;
  cursor: pointer;
  &:hover {
    background: rgb(43, 46, 43);
  }
`;
