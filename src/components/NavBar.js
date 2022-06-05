import React from 'react'

const NavBar = (props) => {
    const { changeComponent, comp } = props
    const nav_class = 'flex w-1/3 lg:w-1/3 justify-center p-1 hover:cursor-pointer',
    nav_active_class = 'bg-white rounded-t border-x border-t border-emerald-600', nav_not_active = 'border-b border-emerald-600', item_class = 'p-2 text-lg font-medium hover:text-emerald-600'
  return (
    <div className='flex justify-center mt-2'>
        <div className='flex justify-center w-full lg:w-2/3'>
            <div onClick={() => changeComponent('converter')} className={`${nav_class}  ${comp === 'converter' ? nav_active_class : nav_not_active}`}>
                <h4 className={`${item_class} ${comp === 'converter' ? 'text-emerald-700' : 'text-emerald-500'}`}>Converter</h4>
            </div>
            <div onClick={() => changeComponent('graph')} className={`${nav_class} ${comp === 'graph' ? nav_active_class : nav_not_active}`}>
                <h4 className={`${item_class} ${comp === 'graph' ? 'text-emerald-700' : 'text-emerald-500'}`} >Graph</h4>
            </div>
            <div onClick={() => changeComponent('list')} className={`${nav_class} ${comp === 'list' ? nav_active_class : nav_not_active}`}>
                <h4 className={`${item_class} ${comp === 'list' ? 'text-emerald-700' : 'text-emerald-500'}`}>
                    All <span className='hidden md:inline'>Exchange</span> Rates
                </h4>
            </div>
        </div>
    </div>
  )
}

export default NavBar