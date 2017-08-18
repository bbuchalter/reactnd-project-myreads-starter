import React from 'react';
import Book from './Book';

class BookGrid extends React.Component {
  render() {
    return (
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
    );
  }
}

export default BookGrid;