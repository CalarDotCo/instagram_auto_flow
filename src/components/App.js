import React, { Component } from 'react';
import '../css/App.css';
import Benefits from './Benefits';
import Header from './Header';
import Explanation from './Explanation';
import Profiles from './Profiles';
class App extends Component {
  render() {
    return (
      <div className="container-fluid zero">
      
        <Header/>
          <Benefits/>
            <Explanation/>
             <Profiles/>

      </div>
    );
  }
}

export default App;
