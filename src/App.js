import React from 'react'
import './App.css'
import SearchPage from './SearchPage';
import Library from './Library';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.togglePage = this.togglePage.bind(this);
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage togglePage={this.togglePage} />
        ) : (
          <Library togglePage={this.togglePage} />
        )}
      </div>
    )
  }

  togglePage() {
    console.log('click!')
    this.setState((prevState) => (
      { showSearchPage: !prevState.showSearchPage }
    ));
  }
}

export default BooksApp
