import { useState } from 'react'

let Bookshelf = () => {

const [books, setBooks] = useState([])
const [newBook, setNewBook] = useState([
    {title:''},
    {author:''}
])

const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    setBooks(...books, newBook)
    setNewBook({title:'', author:''})
}

    return(
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title:</label>
    
    <input id="title"
    name="title"
    value={newBook.title}
    onChange={handleInputChange} />
    
    <label htmlFor="author">Author:</label>
    
    <input id="author"
    name="author"
    value={newBook.author}
    onChange={handleInputChange} />
    <button type='submit'>Submit your book</button>
    </form>
  </div>
    <div>
        {books.map((book, index) =>
        <bookCardsDiv
        key={index}
        title={book.title}
        author={book.author}
        />
        )}

    </div>
        
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>

    )
}



export default Bookshelf