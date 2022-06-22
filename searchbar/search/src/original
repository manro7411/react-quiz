
import './App.css';
import { useState, useEffect } from "react"

function App() {
  //empty array
  const [countries, setCountries] = useState([])

  // searc word and set the value word in the input button
  const [word, setWord] = useState("")
  //seach data filter 
  //เงื่อนไขในการค้นหา
  const [dataFilter] = useState(["name", "capital"])

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
  }, [])
  // pull the data from word
  //some => data of item
  // from -1
  const searchCountries = (countries) => {
    return countries.filter((item) => {
      return dataFilter.some((filter) => {
        return item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) > -1
      })

    })

  }
  const formatnumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input type="text" className='search-input'
            placeholder='search'
            value={word} onChange={(e) => setWord(e.target.value)} />
        </label>

      </div>
      <ul className="row">
        {searchCountries(countries).map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="card-title">
                  <img key={index} src={item.flag} alt={item.name} />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                    <ol className="card-list">
                      <li>ประชากร : <span>{formatnumber(item.population)}</span></li>
                      <li>ภูมิภาค : <span>{item.region}</span> </li>
                      <li>เมืองหลวง : <span>{item.capital}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
