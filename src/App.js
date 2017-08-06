import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search.js'
import Bookshelf from './Bookshelf.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(books)
    })
  }

  getObjByAttribute = (set, attr_name, value) =>{
    if(set.length)
      return set.filter((obj) => obj[attr_name] === value)
    return []
  }

  update = (book, shelf) => {    
    BooksAPI.update(book, shelf)
    .then(() => 
      {this.setState({ books: this.state.books.map(( bookInShelf ) => {
        if(bookInShelf.id === book.id){
          bookInShelf.shelf = shelf;
        }
        return bookInShelf;
      })})
    })
  }

  add = (book, shelf) =>{
    book.shelf = shelf;
    BooksAPI.update(book, shelf)
    .then(book => 
      {this.setState({ books: this.state.books.concat([book])})
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search addBook={this.add}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf shelfTitle="Currently Reading" bookList={this.getObjByAttribute(this.state.books, "shelf", "currentlyReading")} shelfCategory="currentlyReading" updateBookStatus={this.update}/>
                <Bookshelf shelfTitle="Want to Read" bookList={this.getObjByAttribute(this.state.books, "shelf", "wantToRead")} shelfCategory="wantToRead" updateBookStatus={this.update}/>
                <Bookshelf shelfTitle="Read" bookList={this.getObjByAttribute(this.state.books, "shelf", "read")} shelfCategory="read" updateBookStatus={this.update}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
