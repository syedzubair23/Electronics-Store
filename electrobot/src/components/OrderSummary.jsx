import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from './logic_components/Context'

function OrderSummary() {
    const {emptyCartAndFav} = useContext(Context)
    const navigate = useNavigate()
  return (
    <div className="h-[calc(100vh-105px)] grid grid-col-1 place-items-center px-4 sm:px-8">
        <div className='md:-mt-4'>
            <h3 className='text-sm text-cyan-400 font-medium'>Payment successful</h3>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-3.5'>Thanks for ordering</h2>
            <p className='text-base sm:text-lg text-gray-500 max-w-prose'>We appreciate your order, we're currently processing it. So hang tight and we'll send you confirmation very soon!</p>
            <hr className='h-[1px] bg-gray-200 mt-10' />
            <div className='w-full'>
            <button className='text-cyan-400 font-medium text-sm mt-6 hover:underline block ml-auto pr-4' onClick={() => {
                navigate('/store')
                emptyCartAndFav()
                }}>
            Continue Shopping ➜
            </button>

            </div>
        </div>
    </div>
  )
}

export default OrderSummary