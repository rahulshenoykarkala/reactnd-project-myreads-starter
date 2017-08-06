import React, { Component } from 'react'

class Book extends Component {
    state={
        shelf: this.props.book.shelf
    }
    render(){
        const { book, updateBookStatus } = this.props;
        //console.log(book)
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} id={book.id} onChange={(e) => {
                            let shelf = e.target.options[e.target.selectedIndex].value;
                            this.setState({shelf})
                            updateBookStatus(book, shelf)
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
                        book.authors && book.authors.map((author, index)=>(<div key={index}>{author}</div>))
                    }
                </div>
            </div>
        )
    }
}

export default Book
