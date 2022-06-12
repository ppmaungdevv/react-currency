import React, {useState, useEffect} from 'react'

const ExchangeListComponent = () => {
  const [base_currency, setBaseCurrency] = useState({
    'MMK': 'Myanmar Kyats',
    'USD': 'United States Dollar'
  })
  const [currencies, setCurrencies] = useState({})

  return (
    <div className='w-full'>
      <div className='flex p-3 w-full place-content-center'>
        <div className='flex place-content-center w-1/3'>
          <select className='appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md' name="cars" id="cars">
              {
                Object.keys(base_currency).map(ele => <option value={ele} key={ele}>{base_currency[ele]}</option>)
              }
              {/* <option value="saab">Thai Bhat</option> */}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ExchangeListComponent