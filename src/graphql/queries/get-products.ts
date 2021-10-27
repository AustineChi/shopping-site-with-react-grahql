import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  query Products($Currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $Currency)
      product_options {
        title
        prefix
        suffix
        options {
          id
          value
        }
      }
    }
  }
`;
export default GET_PRODUCTS;
