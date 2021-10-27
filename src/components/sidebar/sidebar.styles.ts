import styled from "styled-components";
import { deviceSize } from "../../lib";

export const SidebarWrapper = styled.div`
  min-width: 100%;
  overflow-y: auto;
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100%;
  z-index: 1400;
  background: rgb(242, 242, 239);
  transform: translateX(0px);
  opacity: 1;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  display: flex;
  transition: transform 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86) 0s,
    opacity 0.4s ease-in-out 100ms;
   padding:  0.5625rem 1.275rem;
  @media only screen and ${deviceSize.sm} {
    min-width: auto;
    width: 474px;
  }
  & > div{
  width: 100%
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  margin: 0.8rem auto;
  max-width: 700px;
  width: 80%;
`;


export const Background = styled.div`
  background: rgb(205, 209, 206);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 0.8;
  z-index: 1399;
  backdrop-filter: blur(3px);
`;

export const CloseSidebarIconWrapper = styled.div`
align-items: center;
-webkit-box-pack: center;
justify-content: center;
display: flex;
border-radius: 9999px;
border: 1px solid rgb(198, 204, 199);
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
}
   & > svg {
    vertical-align: middle;
    display: inline-block;
    line-height: 1em;
    color: currentcolor;
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    font-size: 0.75rem;
   }
`;

export const SelectCurrencyWrapper = styled.div`
    height: fit-content;
    position: relative;
    width: auto;
    & > select {
      outline: 0px;
      position: relative;
      transition: all 0.2s ease 0s;
      padding: 2px 12px 1px;
      line-height: normal;
      height: 38px;
      background: transparent;
      border-radius: 0px;
      border: 0px;
      font-size: 0.81rem;
      @media only screen and ${deviceSize.sm} {
        height: 52px;
      }
    }
`
