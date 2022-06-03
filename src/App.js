import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BaseComponent from './components/BaseComponent';

function App() {
  const [comp, set_comp] = useState('converter')

  const changeComponent = (comp_name) => {
    set_comp(comp_name)
  }
  return (
    <div className="App">
      <div className='bg-gradient-to-br from-[#eeeced] to-[#e6f0ff] min-h-screen'>
        {/* <h2 className='text-4xl font-medium text-slate-800 p-3'> */}
        <h2 className='p-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400'>
          React Kurrency
        </h2>
        <NavBar changeComponent={changeComponent} comp={comp} />
        <BaseComponent comp={comp} />
      </div>
    </div>
  );
}

export default App;
