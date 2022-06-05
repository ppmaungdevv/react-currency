import React from 'react'

const ConverterComponent = () => {
  return (
    <div className='flex flex-col w-full lg:w-2/3 place-content-center px-2 h-2/3'>
      <div className='flex mb-5 justify-center'>
        <select className='appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md' name="cars" id="cars">
          <option className='' value="volvo">USD</option>
          <option value="saab">THB</option>
          <option value="mercedes">MMK</option>
          <option className='py-2.5' value="audi">SGD</option>
        </select>
        <input className='w-full lg:w-2/3 bg-white p-2 border border-emerald-500 rounded ml-2 focus:outline-none focus:border-green-300 focus:shadow-md' type='text' />
      </div>
      <div className='flex justify-center'>
        <select className='appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md' name="cars" id="cars">
          <option className='' value="volvo">USD</option>
          <option value="saab">THB</option>
          <option value="mercedes">MMK</option>
          <option className='py-2.5' value="audi">SGD</option>
        </select>
        <input className='w-full lg:w-2/3 bg-white p-2 border border-emerald-500 rounded ml-2 focus:outline-none focus:border-green-300 focus:shadow-md' type='text' />
      </div>
    </div>
  )
}

export default ConverterComponent