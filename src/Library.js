import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelves: {},
      shelfNames: [],
    };
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const shelves = {}
      const shelfNames = []

      books.forEach(book => {
        if(shelves[book.shelf] !== undefined) {
          shelves[book.shelf].push(book.id)
        } else {
          shelfNames.push(book.shelf)
          shelves[book.shelf] = [book.id]
        }
      });
      this.setState({
        shelves: shelves,
        shelfNames: shelfNames,
      });
    });
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelfNames.map(name => <Bookshelf key={name} name={name} />)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Library;