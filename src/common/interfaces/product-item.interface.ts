import {ProductOption} from "./product-option.interface"

export interface ProductItem {
    id: number;
    title: string;
    image_url: string;
    price: number;
    product_options?: ProductOption[]

}