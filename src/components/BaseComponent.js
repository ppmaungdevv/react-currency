import React from 'react'
import ConverterComponent from './ConverterComponent';
import ExchangeListComponent from './ExchangeListComponent';
import GraphComponent from './GraphComponent';

const components = {
    converter: ConverterComponent,
    graph: GraphComponent,
    list: ExchangeListComponent
}

export default function BaseComponent({comp}) {
    const DynamicComp = components[comp]
  return (
    <div className='flex justify-center h-96 m-0 border-0'>
      <div className='flex justify-center border-x border-b rounded-b border-emerald-600 w-full lg:w-2/3 bg-white'>
       <DynamicComp test={comp} />
      </div>
    </div>
  )
}
