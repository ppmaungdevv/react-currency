import axios from 'axios'
import React, {useState, useEffect} from 'react'


const ExchangeListComponent = () => {
  const [base_currency, setBaseCurrency] = useState([])
  useEffect(() => {
    let temp = null
    axios.get('https://api.exchangerate.host/symbols').then(({data}) => {
      const test = Object.keys(data.symbols).map(ele => {
        const { description, code } = data.symbols[ele]
        return { description, code }
      })
      setBaseCurrency(test)
    })
  
    // return () => {
    //   second
    // }
  }, [])

  const [selected_base, setSelectedBase] = useState('MMK')
  useEffect(() => {
    
    axios.get(`https://api.exchangerate.host/latest?base=${selected_base}`).then(({data}) => {
      console.log('refetch', data)
    })

    // return () => {
    //   second
    // }
  }, [selected_base])
  
  

  const changeBase = e => {
    console.log(e.target.value)
  }

  const [currencies, setCurrencies] = useState({})

  return (
    <div className='w-full'>
      <div className='flex p-3 w-full place-content-center'>
        <div className='flex place-content-center w-1/3'>
          <select className='appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md' name="cars" id="cars" value={selected_base} onChange={ (e) => setSelectedBase(e.target.value) }>
              {
                base_currency.map(ele => <option value={ele.code} key={ele.code}>{ele.description}</option>)
              }
              {/* <option value="saab">Thai Bhat</option> */}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ExchangeListComponent