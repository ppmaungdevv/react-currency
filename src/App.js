import './App.css';
function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-br from-[#ffdef2] to-[#e6foff] min-h-screen'>
        {/* <h2 className='text-4xl font-medium text-slate-800 p-3'> */}
        <h2 className='p-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#b8cf87] to-[#87cf8e]'>
          React Kurrency
        </h2>
        <div className='p-3'>
          <select className='appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md' name="cars" id="cars">
            <option className='' value="volvo">USD</option>
            <option value="saab">THB</option>
            <option value="mercedes">MMK</option>
            <option className='py-2.5' value="audi">SGD</option>
          </select>
          <input className='bg-white p-2 border rounded ml-2 focus:outline-none focus:border-green-300 focus:shadow-md' type='text' />
        </div>
        <div className='p-3'>
          <select className='appearance-none px-2 py-2.5 leading-tight text-base font-medium text-left uppercase rounded border text-green-800 bg-white focus:outline-none focus:ring-0 focus:border-green-300 focus:shadow-md transition ease-in-out' name="cars" id="cars">
            <option value="saab">Myanmar Kyats</option>
            <option value="volvo">United States Dollar</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input className='bg-white p-2 border rounded ml-2 focus:outline-none focus:border-green-300 focus:shadow-md' type='text' />
        </div>
      </div>
    </div>
  );
}

export default App;
