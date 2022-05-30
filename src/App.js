import { useState } from 'react';
import './App.css';
import ConverterComponent from './components/ConverterComponent';
import ExchangeListComponent from './components/ExchangeListComponent';
import GraphComponent from './components/GraphComponent';
import NavBar from './components/NavBar';

const components = {
  converter: ConverterComponent,
  graph: GraphComponent,
  list: ExchangeListComponent
}

function App() {
  const [comp, set_comp] = useState(components.converter)

  const changeComponent = (comp_name) => {
    set_comp(components[comp_name])
    console.log('compname', comp_name)
  }

  return (
    <div className="App">
      <div className='bg-gradient-to-br from-[#eeeced] to-[#e6f0ff] min-h-screen'>
        {/* <h2 className='text-4xl font-medium text-slate-800 p-3'> */}
        <h2 className='p-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#b8cf87] to-[#87cf8e]'>
          React Kurrency
        </h2>
        <NavBar changeComponent={changeComponent} />
        {comp} {/* there might be problem with props */}
        {/* <{comp} /> */}
        {/* <ConverterComponent />
        <GraphComponent/>
        <ExchangeListComponent/> */}
      </div>
    </div>
  );
}

export default App;
