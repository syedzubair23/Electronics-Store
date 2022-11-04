import React from "react";

function ProductDetails() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-5 xl:gap-x-8">
          <div className="col-span-3 min-h-[31.375rem] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-[31.375rem]">
            <img
              src="https://th.bing.com/th/id/OIP.exqofz-kQaM9nCVoKaUEpQHaHa?pid=ImgDet&rs=1"
              alt=""
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
