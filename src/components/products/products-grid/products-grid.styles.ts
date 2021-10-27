import styled from "styled-components";
import { deviceSize } from "../../../lib";

export const ProductGridWrapper = styled.div`
  background: #e2e6e3;
  width: 100%;
`;

export const ProductGridContainer = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1300px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and ${deviceSize.sm} {
    grid-template-columns: repeat(auto-fill, 21.125rem);
    justify-content: space-between;
  }
`;