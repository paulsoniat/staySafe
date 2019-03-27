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
      users: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  componentDidMount() {
    this.callApi()
      .then(response => console.log(response))
      .then(res => this.setState({ response: res.express }))
      .then(console.log(this.state.response))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    axios.get('/allUsers')
    .then(function (response) {
      console.log(response, response.data);
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
    if(this.state.users.length) {
      return (
        <div className="App"> 
        {this.state.response.map(user =>
                (<div>
                  {user[0]}
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
