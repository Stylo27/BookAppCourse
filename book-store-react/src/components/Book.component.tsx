import { useParams } from "react-router-dom"
import { IBook } from "../models/book";
import { useEffect, useState } from "react";
import { bookService } from "../services/book.service";

export default function Book() {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    bookService.find(bookId)
    .then(book => setBook(book));
  }, [bookId]);

  return(
    <div>
      <h1>{book?.name}</h1>
      <p>{book?.author}</p>
    </div>
  )
};
