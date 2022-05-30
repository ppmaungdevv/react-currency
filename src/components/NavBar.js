import React from 'react'

const NavBar = (props) => {
    const { changeComponent } = props
  return (
    <div className='flex justify-center m-2'>
        <div className='flex w-2/3'>
        {/* active style */}
        <div onClick={() => changeComponent('converter')} className='flex-1 m-1 p-1 border-b border-green-500 hover:cursor-pointer'>
            <h4 className='p-2 text-lg text-green-500'>Converter</h4>
        </div>
        <div onClick={() => changeComponent('graph')} className='flex-1 p-1 m-1 hover:cursor-pointer hover:border-b hover:border-b-green-500'>
            <h4 className='p-2 text-lg text-green-400 hover:text-green-500'>Graph</h4>
        </div>
        <div onClick={() => changeComponent('list')} className='flex-1 p-1 hover:cursor-pointer hover:border-b hover:border-b-green-500'>
            <h4 className='p-2 text-lg text-green-400 hover:text-green-500'>All Exchange Rate</h4>
        </div>
        </div>
    </div>
  )
}

export default NavBar