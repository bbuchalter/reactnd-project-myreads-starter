import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage';
import Library from './Library';

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Library}/>
          <Route exact path="/search" component={SearchPage}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp
