import React from 'react'
import './preloader.css'
const Preloader = () => {
  return (
     <>
        <div className='text-center w-screen h-screen flex items-center justify-center'>
            <div className=''>
                <p className='font-bold  loading-animation'>Loading...</p>
            </div>
        </div>
     </>
  )
}

export default Preloader