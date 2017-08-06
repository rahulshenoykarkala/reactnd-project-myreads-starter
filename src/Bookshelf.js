import React, { Component } from 'react'

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
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} id={book.id} onChange={(e) => {
                                                this.props.updateBookStatus(e.target)
                                            }}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">
                                        {
                                            book.authors.map((author, index)=>(<div key={index}>{author}</div>))
                                        }
                                    </div>
                                </div>
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