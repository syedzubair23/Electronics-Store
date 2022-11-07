import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"

const products = [
    {
      id: 1,
      name: 'Ultrasonic Sensor',
      href: '#',
      imageSrc: 'https://th.bing.com/th/id/OIP.exqofz-kQaM9nCVoKaUEpQHaHa?pid=ImgDet&rs=1',
      imageAlt: "Ultrasonic Sensor",
      rating: '5',
      reviews: '14',
      price: '3',
    },
    {
      id: 1,
      name: 'Ultrasonic Sensor',
      href: '#',
      imageSrc: 'https://th.bing.com/th/id/OIP.exqofz-kQaM9nCVoKaUEpQHaHa?pid=ImgDet&rs=1',
      imageAlt: "Ultrasonic Sensor",
      rating: '5',
      reviews: '14',
      price: '3',
    },
    {
      id: 1,
      name: 'Ultrasonic Sensor',
      href: '#',
      imageSrc: 'https://th.bing.com/th/id/OIP.exqofz-kQaM9nCVoKaUEpQHaHa?pid=ImgDet&rs=1',
      imageAlt: "Ultrasonic Sensor",
      rating: '5',
      reviews: '14',
      price: '3',
    },
    {
      id: 1,
      name: 'Ultrasonic Sensor',
      href: '#',
      imageSrc: 'https://th.bing.com/th/id/OIP.exqofz-kQaM9nCVoKaUEpQHaHa?pid=ImgDet&rs=1',
      imageAlt: "Ultrasonic Sensor",
      rating: '5',
      reviews: '14',
      price: '3',
    },
    // More products...
  ]
  
  export default function Card() {
    return (
      <div className="bg-white">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative p-6 border-x border-y border-gray-200">
                <div className="min-h-64 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-64">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-8 flex flex-col">
                  <div className="mb-3 self-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex gap-x-0.5">
                        {Array(Number(product.rating)).fill().map(() => <p><StarIcon className="h-5 w-5 text-yellow-300" /></p>)}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{`${product.reviews} reviews`}</p>
                  </div>
                    <div className="flex justify-between items-center mt-5 mb-4">
                        <HeartIcon className="h-6 w-6 text-gray-400" />
                        <p className="text-lg font-bold text-gray-900">{`$${product.price}`}</p>
                        <ShoppingCartIcon className="h-6 w-6 text-gray-400" />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    )
  }
  