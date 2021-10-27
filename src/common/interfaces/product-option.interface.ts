type productOptionValue = {
    id: number;
    value: string
}


export interface ProductOption {
    title: string;
    prefix: string;
    suffix: string;
    options: productOptionValue[]

}