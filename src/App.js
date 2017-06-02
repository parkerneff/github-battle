import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {


      var users = [
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false } ];

      var friends = users.filter(function (item) {
          return item.friend === true
      });
      var enemies = users.filter(function (item) {
          return item.friend === false
      });

      return (
          <div>
              <h1>Friends</h1>
              <ul>
                  {friends.map(function(item) {
                      return <li key={item.name}> {item.name} </li>
                  })}
              </ul>

              <hr />

              <h1> Non Friends </h1>
              <ul>
                  {enemies.map(function(item) {
                      return <li key={item.name}> {item.name} </li>
                  })}
              </ul>
          </div>
    );
  }
}

export default App;
