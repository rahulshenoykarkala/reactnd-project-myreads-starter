import React, { Component } from 'react'
import Book from './Book.js'

class Bookshelf extends Component {
    render(){
        return(
            <div className="bookshelf" key={this.props.shelfCategory}>
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.bookList.map((book) => (
                            <li key={book.id}>
                                <Book book={book} updateBookStatus={this.props.updateBookStatus}/>
                            </li>
                        ))
                    }
                </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf