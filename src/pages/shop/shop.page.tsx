import React, { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import ProductsGrid from "../../components/products/products-grid";
import Sidebar from "../../components/sidebar";
import { useGetProducts } from "../../hooks/useGetProducts";
import { setSelectedCurrency } from "../../common/cache";
import PageDescription from "../../components/page-description";
import mockData from "./mock";

const Learn: React.FC = () => {
  const selectedCurrency = useReactiveVar(setSelectedCurrency);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const { loading, error, data } = useGetProducts(selectedCurrency);
  if (loading) return <div>loading....</div>;
  if (error) return <div>an error occurred</div>;
  if (!data?.products) return <div> no data</div>;

  function handleSidebar() {
    setOpenSidebar((prev) => !prev);
  }
  return (
    <div className="learn">
      <PageDescription title={mockData?.title} subTitle={mockData?.subTitle} />
      <ProductsGrid
        products={data?.products || []}
        handleSidebar={handleSidebar}
      />
      {openSidebar && <Sidebar handleSidebar={handleSidebar}          products={data?.products || []}
/>}
    </div>
  );
};

export default Learn;
