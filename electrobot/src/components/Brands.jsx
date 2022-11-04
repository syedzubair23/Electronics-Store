import React from "react";

const brands = [
    // { name: 'MicroChip', src: 'MicroChip.svg', href: '#' },
    { name: 'Fujitsu', src: 'Fujitsu.svg', href: '#' },
    { name: 'Raspberry Pi', src: 'Raspberry_Pi.svg', href: '#' },
    { name: 'Arduino', src: 'Arduino.svg', href: '#' },
    { name: 'Sparkfun', src: 'Sparkfun.svg', href: '#' },
  ]

function Brands() {
  return (
    <div>
      <div className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-8 py-14 border-t-2 border-b-2 border-gray-100">
          <div className="col-start-1 grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {brands.map(brand => (
                <img className="aspect-w-1 h-16" src={`images/${brand.src}`} alt={brand.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
