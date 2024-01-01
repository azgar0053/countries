import React, {useState, useEffect} from 'react';
import Card from './components/Card/Card';
import './App.css';


function App() {
  const [data, setData]=useState([])

  const fetchData=async ()=>{
      try {
          const res =await  fetch('https://restcountries.com/v3.1/all');
          const result = await res.json();
          setData(result)       
      } catch (error) {
          console.error(error)
      }
  }

  useEffect(()=>{
      fetchData()
  },[]);

  return (
    <div className="App">
      {data?      <>
      <h1>Country Data</h1>
      <div className='dataDiv'>
        {data.map((ele)=>
          <Card image={ele.flags.png} imgName={ele.name.common} city={ele.name.common}/>
        )}
      </div>
      </>:<h1>Loading...</h1>}


    </div>
  );
}

export default App;
