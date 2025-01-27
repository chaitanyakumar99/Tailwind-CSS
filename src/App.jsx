import React from 'react'
import Call from './component/call'

const App = () => {
  return (
    // <div className='flex justify-center m-1 p-2 items-center gap-1' >
    //   <p className='text-2xl text-red-600'>hello</p>
    //   <p>i am coder</p>
    //   <Call />
    // </div>
    <div className='flex justify-center items-center gap-1'>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Call/>
    </div>
  )
}

export default App
