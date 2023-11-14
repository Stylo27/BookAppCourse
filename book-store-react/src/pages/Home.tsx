import { IBook } from '../../models/book';

type homeProps = {
  books: IBook[]
};

export default function Home({books}: homeProps) {

  return(
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Rating</th>
      </tr>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.rating}</td>
        </tr>
      ))}
    </table>
  )
};
