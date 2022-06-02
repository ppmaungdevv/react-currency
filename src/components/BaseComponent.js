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
    <DynamicComp test={comp} />
  )
}
