import { useQuery } from "@apollo/client";
import GET_CURRENCIES from "../graphql/queries/get-currencies"


export const useGetCurrencies = () => {
    const { data } = useQuery(GET_CURRENCIES);
    return data?.currency
}