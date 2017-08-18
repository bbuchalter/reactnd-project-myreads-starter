import React from 'react';
import BookGrid from './BookGrid';

class Bookshelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          {
            this.props.bookIds &&
            <BookGrid
              bookIds={this.props.bookIds}
              onShelfChange={this.props.onShelfChange}
            />
          }
        </div>
      </div>
    );
  }
}

export default Bookshelf;