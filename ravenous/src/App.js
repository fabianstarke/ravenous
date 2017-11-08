import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../components/businessList';
import SearchBar from  '../components/searchBar';

class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    )
  }
}

export default App;
