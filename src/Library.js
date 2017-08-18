import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookIdsByShelf: {},
      shelfNames: [],
    };
    this.moveBookToNewShelf = this.moveBookToNewShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const bookIdsByShelf = {}
      const shelfNames = []

      books.forEach(book => {
        if(bookIdsByShelf[book.shelf] !== undefined) {
          bookIdsByShelf[book.shelf].push(book.id)
        } else {
          shelfNames.push(book.shelf)
          bookIdsByShelf[book.shelf] = [book.id]
        }
      });
      this.setState({
        bookIdsByShelf: bookIdsByShelf,
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
            {this.state.shelfNames.map(shelfName =>
              <Bookshelf
                key={shelfName}
                name={shelfName}
                bookIds={this.state.bookIdsByShelf[shelfName]}
                onShelfChange={this.moveBookToNewShelf}
              />
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }

  moveBookToNewShelf(bookProps, shelfName) {
    BooksAPI.update(bookProps, shelfName).then(bookIdsByShelf =>
      this.setState({bookIdsByShelf})
    )
  }
}

export default Library;