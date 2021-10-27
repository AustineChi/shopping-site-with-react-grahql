import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "../graphql/queries/get-products";

export const useGetProducts = (currencyValue: string) => {
  const response = useQuery(GET_PRODUCTS, {
    variables: { Currency: currencyValue },
  });
  return response;
};
