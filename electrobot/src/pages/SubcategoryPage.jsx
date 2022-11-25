import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { Context } from "../components/logic_components/Context";

export default function SubcategoryPage() {
  const { allData } = useContext(Context);
  const { id } = useParams()
  console.log(id)

  const subcategory = allData.filter((product) => product.subcategory === id)  

  const card = subcategory.map((product) => (
    <Card key={product.id} product={product} />
  ));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 capitalize">
          {id} 
          <span className="font-normal text-cyan-400">{` (${subcategory.length})`}</span>
        </h2>
        <div className="my-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {card}
        </div>
      </div>
    </div>
  );
}
