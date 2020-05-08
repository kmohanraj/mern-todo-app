import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todo-list.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="www.google.com" target="_blank">
              <img src={logo} width="30" height="30" alt="react-logo" />
              <Link to="/" className="navbar-brand">BILLING Systems</Link>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Products</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create product</Link>
                  </li>
                </ul>
              </div>
            </a>
          </nav>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
