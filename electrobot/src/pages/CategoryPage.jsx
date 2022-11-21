import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { Context } from "../components/logic_components/Context";

export default function CategoryPage() {
  const { allData } = useContext(Context);
  const { id } = useParams()

  const category = allData.filter((product) => product.subcategory === id)  

  const card = category.map((product) => (
    <Card key={product.id} product={product} />
  ));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
          {id}
        </h2>
        <div className="mt-6 mb-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {card}
        </div>
      </div>
    </div>
  );
}
