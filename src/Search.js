import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class Search extends Component {
    state = {
        books: [],
        query: ""
    }

    search(value){
        BooksAPI.search(value,10).then((books) => {
            if(books.length){
                let booksNew = books.map(( book ) => {
                    book.shelf = "none"
                    let shelfBook = this.props.books.filter((shelfBook) => book.id === shelfBook.id)
                    if(shelfBook.length){
                        return shelfBook[0]
                    }
                    return book
                })
                this.setState({books: booksNew})
            }
        })
    }

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search"  to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    {/* 
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                    
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author"
                    value={this.state.query} onChange={(event)=>{
                        var query = event.target.value;
                        this.setState({query})
                        if(query) this.search(query)
                    }}/>
                    
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.books.map((book)=>(
                            <li key={book.id}>
                                <Book book={book} updateBookStatus={this.props.addBook}/>
                            </li>
                    ))}
                </ol>
                </div>
            </div>
        )
    }
}

export default Search