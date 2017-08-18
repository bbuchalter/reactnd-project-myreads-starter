import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverImageUrl: '',
      title: '',
      authors: ''
    }
  }

  componentDidMount() {
    BooksAPI.get(this.props.id).then((book) => {
      this.setState({
        coverImageUrl: book.imageLinks.smallThumbnail,
        title: book.title,
        authors: book.authors
      })
    });
  }

  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${this.state.coverImageUrl}")`
          }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">{this.state.authors}</div>
      </div>
    );
  }
}

export default Book;