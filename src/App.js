import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage';
import Library from './Library';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookIdsByShelf: {},
    };
    this.shelfNames = ["currentlyReading", "wantToRead", "read"];
    this.moveBookToNewShelf = this.moveBookToNewShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const bookIdsByShelf = {}

      books.forEach(book => {
        if(bookIdsByShelf[book.shelf] !== undefined) {
          bookIdsByShelf[book.shelf].push(book.id)
        } else {
          bookIdsByShelf[book.shelf] = [book.id]
        }
      });
      this.setState({
        bookIdsByShelf: bookIdsByShelf,
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() =>
            <Library
              shelfNames={this.shelfNames}
              bookIdsByShelf={this.state.bookIdsByShelf}
              onShelfChange={this.moveBookToNewShelf}
            />
          }/>
          <Route exact path="/search" render={() =>
            <SearchPage
              onShelfChange={this.moveBookToNewShelf}
            />
          }/>
        </div>
      </Router>
    )
  }

  moveBookToNewShelf(bookProps, shelfName) {
    BooksAPI.update(bookProps, shelfName).then(bookIdsByShelf =>
      this.setState({bookIdsByShelf})
    )
  }
}

export default BooksApp
