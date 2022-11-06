import { Fragment, useState } from "react";
import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import { Tab, Transition } from "@headlessui/react";

const navigation = {
    categories: [
      {
        id: "components",
        name: "Components",
        featured: [
          {
            name: "Resistors",
            href: "#",
            imageSrc:
              "https://media.gettyimages.com/photos/electronic-component-electric-heating-elements-of-various-models-picture-id1339847300?k=20&m=1339847300&s=612x612&w=0&h=aukuydVEoGuY3m6c8VXpwsIzBsRSivMEBfX2f4ihrvw=",
            imageAlt: "Resistors",
          },
          {
            name: "Capcitors",
            href: "#",
            imageSrc:
              "https://media.gettyimages.com/photos/collection-of-capacitors-against-a-white-background-picture-id172962646?k=20&m=172962646&s=612x612&w=0&h=ES1R7bMMDkR5r3Xp3CnJD-GJTaWLtL8aQ4e-wi-Aaxo=",
            imageAlt: "Capacitors",
          },
          {
            name: "Inductors",
            href: "#",
            imageSrc:
              "https://qph.fs.quoracdn.net/main-qimg-d7ec636623ea2d1081f16042a4aabd38-c",
            imageAlt: "Inductors",
          },
          {
            name: "Leds",
            href: "#",
            imageSrc:
              "https://media.gettyimages.com/photos/high-angle-view-of-led-lights-against-white-background-picture-id1157527318?k=20&m=1157527318&s=612x612&w=0&h=LyjPCH4bSngY-LtXpphg1eKmrfMo0FICYpd_1OTISnM=",
            imageAlt: "Leds",
          },
        ],
      },
      {
        id: "microcontrollers",
        name: "Microcontrollers",
        featured: [
          {
            name: "Arduino",
            href: "#",
            imageSrc:
              "https://c1.wallpaperflare.com/preview/107/530/442/electronics-arduino-diy.jpg",
            imageAlt: "Arduino",
          },
          {
            name: "Esp32",
            href: "#",
            imageSrc:
              "https://everybitelectronics.co.uk/wp-content/uploads/2020/04/ESP32.jpg",
            imageAlt: "Esp32",
          },
          {
            name: "Raspberri pi",
            href: "#",
            imageSrc:
              "https://c4.wallpaperflare.com/wallpaper/672/858/376/raspberry-pi-computer-macro-wallpaper-preview.jpg",
            imageAlt: "Raspberri pi",
          },
          {
            name: "Stm32",
            href: "#",
            imageSrc:
              "https://th.bing.com/th/id/OIP.HC9F52kRLNEhyd5W5b0BmQHaHP?pid=ImgDet&rs=1",
            imageAlt: "Stm32",
          },
        ],
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

function ProductDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 lg:gap-x-16 lg:grid-cols-5">
          <div className="col-span-3 min-h-96 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-96">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/672/858/376/raspberry-pi-computer-macro-wallpaper-preview.jpg"
              alt=""
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-y-4">
              <p className="text-sm text-gray-500">
                <span className="mr-2">Microcontrollers</span>/
                <span className="ml-2">Raspberri pi</span>
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mt-0.5">Raspberri Pi</h2>
              <div className="flex items-center">
                <h3 className="text-xl text-gray-900 font-medium">$220</h3>
                <span className="mx-4 h-6 w-px bg-gray-500" aria-hidden="true"></span>
                <div className="flex items-center gap-x-2.5">
                    <div className="flex items-center text-yellow-400">
                        <StarIcon className="h-6 w-6" />
                        <StarIcon className="h-6 w-6" />
                        <StarIcon className="h-6 w-6" />
                        <StarIcon className="h-6 w-6" />
                        <StarIcon className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-gray-900 font-medium">1624 reviews</p>
                </div>
              </div>
              <p className="text-base text-gray-500 text-justify">
                Broadcom BCM2711, quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
                Your tiny, dual-display, desktop computer and robot brains, smart home hub, media centre, networked AI core, factory controller, and much more with Raspberry Pi 4.
              </p>
              <div className="flex gap-x-3 items-center mt-1">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <p className="text-sm text-gray-500">
                  In stock and ready to ship
                </p>
              </div>
              <button
                className="my-6 outline-none text-center w-full rounded-lg border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
        <div className="my-32">
            <div className="grid grid-cols-1 gap-y-10 lg:gap-x-16 lg:grid-cols-5">
                <div className="col-span-2 flex flex-col gap-y-3.5">
                    <h2 className="font-bold text-2xl">Customer Reviews</h2>
                    <div className="flex items-center gap-x-2.5">
                        <div className="flex items-center text-yellow-400">
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-gray-900 font-medium">Based on 1624 reviews</p>
                    </div>
                    <div className="flex flex-col gap-y-[20px] mt-4">
                    <div className="flex items-center gap-x-2.5">
                        <p className="text-base font-medium">5</p>
                        <div className="">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div class="ml-1 h-3 w-full bg-gray-100 rounded-full">
                            <div class="h-full rounded-full bg-yellow-400" style={{ width: `63%`}} ></div>
                        </div>
                        <p className="ml-3.5 text-base font-medium">63%</p>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                        <p className="text-base font-medium">5</p>
                        <div className="">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div class="ml-1 h-3 w-full bg-gray-100 rounded-full">
                            <div class="h-full rounded-full bg-yellow-400" style={{ width: `10%`}} ></div>
                        </div>
                        <p className="ml-3.5 text-base font-medium">10%</p>
                    </div>
                    </div>
                    <div className="mt-7">
                        <h3 className="text-lg font-medium">Share your thoughts</h3>
                        <p className="mt-2 text-sm text-gray-500 max-w-[45ch]">If you've used this product, share your thoughts with other customers</p>
                    </div>
                    <button
                        className="mt-4 broder-px border-cyan-400 text-center w-full rounded-lg border px-6 py-2.5 text-base font-medium text-gray-900 shadow-sm hover:bg-cyan-500"
                    >
                        Write a review
                    </button>

                </div>
                <div className="col-span-3 flex flex-col">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3.5 items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-400">
                            <img src="https://avatars.githubusercontent.com/u/92371583?s=400&u=3bfbe4078a3fd92304b410b05a09a3aeea0c8c9a&v=4" alt="" className="w-full h-full rounded-full object-center object-fill" />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <h3 className="text-sm font-bold text-gray-900">Syed Zubair</h3>
                            <div className="flex items-center text-yellow-400">
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                            </div>
                        </div>
                        </div>
                        <p className="text-base text-gray-500 italic">This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
                    </div>
                    <hr className="h-1 text-gray-200 w-full my-12" />
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3.5 items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-400">
                            <img src="https://avatars.githubusercontent.com/u/92371583?s=400&u=3bfbe4078a3fd92304b410b05a09a3aeea0c8c9a&v=4" alt="" className="w-full h-full rounded-full object-center object-fill" />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <h3 className="text-sm font-bold text-gray-900">Syed Zubair</h3>
                            <div className="flex items-center text-yellow-400">
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                            </div>
                        </div>
                        </div>
                        <p className="text-base text-gray-500 italic">This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

{/* <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-5 xl:gap-x-8">
            
            
            <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-1 px-2">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-cyan-400 border-cyan-400"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 h-32 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
        </div> */}