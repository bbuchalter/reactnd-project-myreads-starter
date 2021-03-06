import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Library extends React.Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelfNames.map(shelfName =>
              <Bookshelf
                key={shelfName}
                name={shelfName}
                bookIds={this.props.bookIdsByShelf[shelfName]}
                onShelfChange={this.props.onShelfChange}
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
}

export default Library;