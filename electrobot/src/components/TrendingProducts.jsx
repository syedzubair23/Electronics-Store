import React from "react";
import Card from "./Card";

function TrendingProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending products
        </h2>
        <Card />
      </div>
    </div>
  );
}

export default TrendingProducts;
