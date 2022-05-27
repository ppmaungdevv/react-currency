import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-br from-[#ffdef2] to-[#e6foff] min-h-screen'>
        {/* <h2 className='text-4xl font-medium text-slate-800 p-3'> */}
        <h2 className='p-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#b8cf87] to-[#87cf8e]'>
          React Kurrency
        </h2>
        <select className='appearance-none whitespace-nowrap px-3 py-2.5 bg-white leading-tight text-base font-medium text-center uppercase rounded-l border-l border-y text-green-800 focus:outline-none focus:ring-0 focus:bg-gray-100 ' name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

      </div>
    </div>
  );
}

export default App;
