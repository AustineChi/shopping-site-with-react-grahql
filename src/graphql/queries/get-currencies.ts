import gql from "graphql-tag";

const GET_CURRENCIES = gql`
query Currencies {
    currency 
  }
`;
export default GET_CURRENCIES;
