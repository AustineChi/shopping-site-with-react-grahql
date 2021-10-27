import styled from "styled-components";

export const CartItemWrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  background: rgb(226, 230, 227);
  padding: 3rem 2rem;
  max-width: 21.125rem;
  width: 100%;
`;

export const CancelIconWrapper = styled.button`
  display: inline-block;
  appearance: none;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: auto;
  border: 0px;
  min-height: auto;
  min-width: auto;
  height: auto;
  padding: 0rem;
  background: none;
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  cursor: pointer;
  & > svg {
    vertical-align: middle;
    display: inline-block;
    line-height: 1em;
    color: currentcolor;
    flex-shrink: 0;
    width: 0.8em;
    height: 0.8em;
  }
`;

export const ControlButton = styled.button`
  appearance: none;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  border: 0px;
  line-height: inherit;
  font-weight: inherit;
  font-family: inherit;
  min-height: auto;
  min-width: auto;
  padding: 0rem;
  background: none;
  width: 24px;
  height: 24px;
  display: flex;
  cursor: pointer;
`;

export const ProductImageWrapper = styled.div`
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  height: 100%;
  & > img {
    object-fit: contain;
    width: 100%;
    max-width: 60px;
  }
`;
