import { InMemoryCache , makeVar} from '@apollo/client';

export const setSelectedCurrency = makeVar("USD");
export const setCart: any = makeVar([]);

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          selectedCurrency: {
            read() {
              return setSelectedCurrency();
            }
          },
          cart: {
            read() {
              return setCart();
            }
          }
        }
      }
    }
  });