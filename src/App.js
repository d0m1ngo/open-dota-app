import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Input from './Input/Input'
import Services from './Services/Services'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', array:[], dataIsLoading: true}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
  
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
        
    handleClick(event) {
        this.getData(this.state.value);
    }
    
    getData(value) {
      const searchString =  Services.getSearchString();
      const url = searchString + value;
        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
            console.log(data);
            let searchArr = data.results;
            this.setState({array:searchArr});
    })
        .catch(function(error) {
          console.log(error);
    });  
    }
    
    render() {
      return (
        <div className="App">
              <div className="container-fluid">
                <Header />
                <Input handleChange={this.handleChange} value={this.state.value} handleClick={this.handleClick}/>
              </div>
        </div>
      );
    }
  }

export default App;
