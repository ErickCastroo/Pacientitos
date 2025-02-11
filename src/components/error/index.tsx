import React from 'react'

function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-center my-1 bg-red-600 text-white font-bold p-1 uppercase text-sm'>
      {children}
    </div>
  )
}

export { Error }