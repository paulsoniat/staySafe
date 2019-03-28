import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: '',
      users: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    axios.get('/allUsers')
    //.then(res => {console.log(res)})
    .then(res => {
      console.log(res.data)
      console.log(this.state.users)
      this.setState({users: res.data})
    })
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    axios.post('/user', {
      firstName: `${this.state.value}`,
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }


  render() {
    if(this.state.users.length > 1) {
      return (
        <div className="App"> 
        {this.state.users.map(user =>
                (<div>
                  {`${user.firstName }` + " " + `${user.lastName}`}
                  </div>))}
        </div>
      );
    }
    else {
      return (
        <div className="App">
           <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }
}

export default App;
