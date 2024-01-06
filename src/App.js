import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchVal, setSearchVal] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const result = await res.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(() => {
      return data.filter((val) => val.name.common.toLowerCase().includes(searchVal.toLowerCase()));
    });
  }, [searchVal, data]);

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <input
            type="text"
            value={searchVal}
            placeholder="Search for countries"
            style={{ padding: '10px', margin: '20px', width: '600px' }}
            onChange={handleChange}
          />

          <div className='dataDiv'>
            {filteredData.map((ele) => (
              <Card
                key={ele.name.common}
                image={ele.flags.png}
                imgName={ele.name.common}
                city={ele.name.common}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
