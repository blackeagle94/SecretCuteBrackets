import React, {Component} from 'react';

class Countries extends Component {
  render(){
    return (
      <div className="countries">
        <div class="card-group">
          {this.props.countries.map(item => (
  <div class="card">
    <img class="card-img-top" src={item.flag} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">Population: {item.population}</p>
      <p class="card-text">Region: {item.region}</p>
      <p class="card-text">Capital: {item.capital}</p>
  </div>
  </div>
          ))}
        </div>
      </div>
      )
  }
}


export default Countries;