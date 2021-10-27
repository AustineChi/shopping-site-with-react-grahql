import ProductGridItem from "./products-grid-item/product-grid-item.component";

import { ProductItem } from "../../../common/interfaces/product-item.interface";

import {
  ProductGridWrapper,
  ProductGridContainer,
} from "./products-grid.styles";

interface ProductsGridProps {
  products: ProductItem[];
  handleSidebar: () => void
}
const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  handleSidebar
}: ProductsGridProps) => {
  return (
    <ProductGridWrapper>
      <ProductGridContainer>
        {products?.map((product) => (
          <ProductGridItem product={product} key={product.id} handleSidebar={handleSidebar}/>
        ))}
      </ProductGridContainer>
    </ProductGridWrapper>
  );
};

export default ProductsGrid;
