import styled from "styled-components";
import { deviceSize } from "../../lib";

type SpaceInterface = {
  height?: string;
};

type BoxInterface = {
  width?: string
  alignItems?: string;
  justifyContent?: string;
  column?: boolean;
  margin?: string;
  padding?: string;
  height?: string;
  bgColor?: string;
  border?: string
};

type TextInface = {
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  lineHeight?: string;
  opacity?: string
}

export const Wrapper = styled.div`
  width: 100%;
  color: #000;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar";
  @media only screen and ${deviceSize.sm} {
    grid-template-columns: 3fr 5fr;
    grid-template-areas:
      "sidebar header"
      "sidebar main";
  }
  @media only screen and ${deviceSize.lg} {
    grid-template-columns: 1fr 4fr;
  }
`;

export const Main = styled.section`
grid-area: main;
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
  @media only screen and ${deviceSize.sm}{
   & > .loading {
      position: absolute;
      top: 50%;
      left: 45%;
   }
`;

export const Header = styled.section`
  grid-area: header;
  width: 100%;
  z-index: 5;
  color: #eee;
  & > h1 {
    text-align: center;
    color: #333;
    margin: 20px;
  }
`;

export const Sidebar = styled.aside`
  width: 100%;
  grid-area: sidebar;
  padding-top: 100px;
`;

export const Text = styled.p<TextInface>`
  color: ${({ color }) => `${color}` || "#e0b115"};
  font-size: ${({ fontSize }) => `${fontSize}` || "auto"};
  font-weight: ${({ fontWeight }) => `${fontWeight}` || "auto"};
  line-height:  ${({ lineHeight }) => `${lineHeight}` || "1.7"};
  padding: ${({ padding }) => `${padding}` || "auto"};
  margin: ${({ margin }) => `${margin}` || "auto"};
  opacity: ${({ opacity }) => `${opacity}` || 1};

`;



export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;
`;

export const Box = styled.div<BoxInterface>`
  width:${(props) => props?.width || "100%"};
  position: relative;
  height: ${(props) => props?.height || "auto"};
  display: flex;
  justify-content: ${(props) => props?.justifyContent || "flex-start"};
  align-items: ${(props) => props?.alignItems || "flex-start"};
  flex-direction: ${(props) => (props?.column ? "column" : "row")};
  margin: ${(props) => props?.margin || 0};
  padding: ${(props) => props?.padding || 0};
  color: inherit;
  background-color: ${(props) => props?.bgColor || "inherit"};
  border: ${(props) => props?.border || "none"};
`;

export const Space = styled.div<SpaceInterface>`
  height: ${({ height }) => `${height}px` || "10px"};
`;
