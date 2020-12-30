import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Countries from './components/Countries'
import { countries } from './data/countriesAll';
import Search from './components/Search'

const App = (props) => {
  
  const [state, setState] = useState({countries: countries})
  
  const filterRegion = (region) => {
    this.setState({countries: countries.filter(item => region == 'all' ? item : item.region == region)
  }
  
  

  
  
    return (
    <div className="App">
      <Header />
      <Countries countries={state.countries}></Countries>
    </div>
  )

}

export default App;
