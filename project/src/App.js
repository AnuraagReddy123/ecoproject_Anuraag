import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Complaint from "./Components/complaint.js";
import DataList from "./Components/DataList.component.js";

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route path = '/' exact component = {DataList} />
          <Route path = '/create' exact component = {Complaint} /> 
        </div>
      </Router>
    );
  }
}

export default App;
