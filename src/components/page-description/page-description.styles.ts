import styled from "styled-components";
import { deviceSize } from "../../lib";

export const PageDescriptionWrapper = styled.div`
  height: 17.4rem;
  padding: 2.4rem;
  max-width: 1300px;
  margin: 0 auto;
`;

export const PageDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.25em;
  font-weight: 400;
  @media only screen and ${deviceSize.sm} {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 0.8125rem;
  line-height: 1.7;
  margin-top: 0.5rem;
  font-weight: 400;
  @media only screen and ${deviceSize.sm} {
    font-size: 1rem;
    line-height: 1.5;
  }

`;
