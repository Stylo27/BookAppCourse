import { useParams } from "react-router-dom"
import { IBook } from "../../models/book";

type booksProps = {
  books: IBook[]
};

export default function Book({books}: booksProps) {
  const { bookId } = useParams();
  const book = books.find(({ id }) => id === +bookId! );

  return(
    <div>
      <h1>{book?.title}</h1>
      <p>{book?.author}</p>
    </div>
  )
};
