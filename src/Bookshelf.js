import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Bookshelf extends Component {
    render(){
        console.log(this.props)
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.bookList.map((book) => (
                            <li>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">Harper Lee</div>
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