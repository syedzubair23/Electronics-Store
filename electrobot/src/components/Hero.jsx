import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-[calc(100vh-105px)]">
      <div className="mx-auto max-w-7xl min-h-[calc(100vh-105px)]">
        <div className="relative z-10 bg-gray-100 py-8 sm:py-16 md:py-20 lg:w-full lg:max-w-2xl lg:pt-10 lg:pb-[5.71rem] xl:py-32 min-h-[calc(100vh-105px)]">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-gray-100 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:-mt-10 2xl:-mt-0">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold  text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline tracking-tight">Want to buy</span>{' '}
                <span className="block text-cyan-400 xl:inline tracking-normal leading-tight">Electronics Hardware</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                We provide you all sorts of electronics hardware. We have microcontrollers, sensors, 
                inductors, capacitors, and resistors of different brands.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link to="/store">
                    <div className="rounded-md shadow">
                    <a
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-400 px-16 py-3 text-base font-medium text-white hover:bg-cyan-500 md:px-18 md:text-lg"
                    >
                        Shop now
                    </a>
                    </div>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
