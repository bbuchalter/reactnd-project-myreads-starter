import React from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookIds: [],
      query: ''
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    const query = event.currentTarget.value;
    this.setState({query});

    if(query !== '') {
      BooksAPI.search(query).then(books => {
        if(books.length) {
          this.setState({ bookIds: books.map(book => book.id)});
        } else {
          this.setState({ bookIds: []});
        }
      });
    } else {
      this.setState({ bookIds: []});
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.onSearch}
              value={this.state.query}
            />

          </div>
        </div>
        <div className="search-books-results">
          <BookGrid
            bookIds={this.state.bookIds}
            onShelfChange={this.props.onShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;