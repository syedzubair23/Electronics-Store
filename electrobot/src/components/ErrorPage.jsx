import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()
  return (
    <div className="h-screen grid grid-col-1 place-items-center">
        <div>
            <h3 className='text-base text-cyan-400 font-medium'>404</h3>
            <h2 className='text-6xl font-bold mb-3.5'>Page not Found</h2>
            <p className='text-lg text-gray-500 max-w-prose'>Sorry, we couldn't find the page you're looking for.</p>
            <hr className='h-[1px] bg-gray-200 mt-10' />
            <div className='w-full'>
            <button className='text-cyan-400 font-medium text-base mt-6 hover:underline block ml-auto pr-4' onClick={() => {
                navigate('/')
                }}>
            Go back home ➜
            </button>

            </div>
        </div>
    </div>
  )
}

export default ErrorPage