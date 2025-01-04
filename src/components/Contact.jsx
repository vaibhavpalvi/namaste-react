import React from 'react'

export const Contact = () => {
  return (
    <div>
        <h1 className='text-center text-3xl bold p-2 m-2'>Contact Us</h1>
        <form action="" className='flex justify-center p-2 m-2'>
          <input type="text" placeholder='Enter your name' className='border border-black m-2 p-2 rounded-lg'/>
          <input type="email" placeholder='Enter your email' className='border border-black m-2 p-2 rounded-lg'/>
          <button className='border border-black m-2 p-2 rounded-lg bg-green-400' onClick={(e)=> e.preventDefault()}>Submit</button>
        </form>
    </div>
  )
}
