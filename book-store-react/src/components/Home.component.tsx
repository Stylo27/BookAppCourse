import { useNavigate } from 'react-router-dom';
import { IBook } from '../models/book';
import { bookService } from '../services/book.service';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

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
    <>
      <Grid container columnSpacing={2}>
        <Grid xs={12}>
          <Grid container>
            <Grid xs={2}>
              <span>Id</span>
            </Grid>
            <Grid xs={4}>
              <span>Title</span>
            </Grid>
            <Grid xs={4}>
              <span>Author</span>
            </Grid>
            <Grid xs={2}>
              <span>Rating</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid container>
            {books.map((book: IBook) => (
              <Grid xs={12}>
                <Grid container>
                    <Grid xs={2}>
                      <span>{book.id}</span>
                    </Grid>
                    <Grid xs={4}>
                      <span onClick={() => redirectToBook(book.id)}>{book.name}</span>
                    </Grid>
                    <Grid xs={4}>
                      <span>{book.author}</span>
                    </Grid>
                    <Grid xs={2}>
                      <span>{book.rating}</span>
                    </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
