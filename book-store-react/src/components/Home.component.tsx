import { useNavigate } from 'react-router-dom';
import { IBook } from '../models/book';
import { bookService } from '../services/book.service';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    bookService.get()
    .then(books => setBooks(books))
  }, [])

  const redirectToBook = (bookId: number) => {
    nav(`/books/${bookId}`, { replace: true });
  };

  return(
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Rating</th>
      </tr>
      {books.map((book: IBook) => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td onClick={() => redirectToBook(book.id)}>{book.name}</td>
          <td>{book.author}</td>
          <td>{book.rating}</td>
        </tr>
      ))}
    </table>
  )
};
