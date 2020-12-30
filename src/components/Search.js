import React from 'react';

class Search extends React.Component{
  
  
  onChange = (e) => {
    this.props.filterRegion(e.target.value)
  }
  
  
  render(){
    return (
      <div>
        <input type="text" placeholder="   ---Search for a Country---"/>
        <select onChange={this.onChange} name="regions" id="regions">
          <option value="all">---Choose Region---</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
      </div>
      )
  }
}

export default Search