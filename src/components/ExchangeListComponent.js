import axios from 'axios'
import React, {useState, useEffect} from 'react'


const ExchangeListComponent = () => {
  const [base_currency, setBaseCurrency] = useState([])
  useEffect(() => {
    axios.get('https://api.exchangerate.host/symbols').then(({data}) => {
      setBaseCurrency(data.symbols)
    })
    // return () => {
    //   second
    // }
  }, [])

  const [selected_base, setSelectedBase] = useState('MMK')
  const [rates, setRates] = useState({})
  useEffect(() => {
    
    axios.get(`https://api.exchangerate.host/latest?base=${selected_base}`).then(({data}) => {
      setRates(data.rates)
    })

    // return () => {
    //   second
    // }
  }, [selected_base])
  
  const rate_length = Object.keys(rates).length,
  left_cell = 'px-5 py-3 w-3/5 border-t border-x text-left',
  right_cell = 'px-5 py-3 w-2/5 border-t border-r text-right' 
  // border-y

  return (
    <div className='w-full overflow-y-scroll'>
      <div className='flex p-3 w-full place-content-center'>
        <div className='flex place-content-center w-full md:w-2/5'>
          <select className='w-full appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md' name="cars" id="cars" value={selected_base} onChange={ (e) => setSelectedBase(e.target.value) }>
              {
                Object.values(base_currency).map(ele => <option value={ele.code} key={ele.code}>1 {ele.description}</option>) 
              }
          </select>
        </div>
      </div>
      <div className='flex place-content-center py-2 px-3'>
        <table className='w-full md:w-3/5 border-separate' style={{borderSpacing: 0}}>
          <tbody>
            {
              Object.keys(rates).map((key, index) => {
                if (key !== selected_base) {
                  return (
                    <tr className='hover:bg-slate-100 hover:text-green-600 hover:cursor-default' key={key}>
                      <td className={ `${left_cell} ${index === 0 ? ' rounded-tl' : ''} ${ index === rate_length - 1 ? 'border-b' : '' } ` }> { base_currency[key].description } </td>
                      <td className={` ${right_cell} ${index === 0 ? 'rounded-tr' : ''} ${ index === rate_length - 1 ? 'border-b' : '' } `}>{ rates[key] }</td>
                    </tr>
                  )
                }
                return null
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExchangeListComponent