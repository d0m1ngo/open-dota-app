import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Input from './Input/Input'
import Services from './Services/Services'
import Card from './Card/Card'
import CardHolder from './CardHolder/CardHolder'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', cardArray: [], dataIsLoading: true }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    this.getData(this.state.value);
  }

  getData(value) {
    const searchString = Services.getSearchString();
    const url = searchString + value;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        let cardArray = data.map((profile) => {
          return (
            <Card key={profile.account_id} avatar={profile.avatarfull} personaname={profile.personaname} />
          )
        })
        this.setState({ cardArray: cardArray });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <Input handleChange={this.handleChange} value={this.state.value} handleClick={this.handleClick} />
          <CardHolder Cards={this.state.cardArray} />
        </div>
      </div>
    );
  }
}

export default App;
