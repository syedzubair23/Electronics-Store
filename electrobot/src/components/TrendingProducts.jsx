import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "./logic_components/Context";
import { Link } from "react-router-dom";

function TrendingProducts() {
  const {allProducts} = useContext(Context)

  const card = allProducts.map((product) => ( 
      <Card key={product.id} product={product} />
  ))

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {card}       
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;






