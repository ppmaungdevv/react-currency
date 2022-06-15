import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BaseComponent from './components/BaseComponent';

function App() {
  const [comp, set_comp] = useState('list')

  const changeComponent = (comp_name) => {
    set_comp(comp_name)
  }
  return (
    <div className="App">
      <div className='p-1 bg-gradient-to-br from-[#eeeced] to-[#e6f0ff] min-h-screen'>
        {/* <h2 className='text-4xl font-medium text-slate-800 p-3'> */}
        <h2 className='p-2 mt-3 mb-10 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600'>
          React Kurrency
        </h2>
        <NavBar changeComponent={changeComponent} comp={comp} />
        <BaseComponent comp={comp} />
      </div>
    </div>
  );
}

export default App;
