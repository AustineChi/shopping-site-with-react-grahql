import styled from "styled-components";
import { deviceSize } from "../../lib";

export const SearchContainer = styled.div`
  display: flex;
  margin: 0.8rem auto;
  max-width: 700px;
  width: 80%;
`;

export const Button = styled.button`
  padding: 7px 14px;
  z-index: 2;
  border-radius: 8px;
  border: 0;
  box-shadow: 0;
  background: #00b303;
  color: #fff;
  outline: 0;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 10.5rem;
  margin: 1rem 0;
  height: 40px;
  @media only screen and ${deviceSize.sm} {
    height: 70px;
    width: 15.5rem;
  }
`;
