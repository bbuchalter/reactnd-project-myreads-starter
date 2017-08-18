import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.bookIds.map(bookId => {
                return(
                  <li key={bookId}>
                    <Book id={bookId} onShelfChange={this.props.onShelfChange} />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;