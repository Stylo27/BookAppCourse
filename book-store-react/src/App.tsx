import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.component';
import Book from './components/Book.component';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

export default function App() {
  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Navigation />
        </Grid>
        <Grid xs={12}>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/books/:bookId" element={<Book/>} />
            </Routes>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export function Navigation() {
  return(
    <nav>
      <Grid container>
        <Grid xs={12} display={'grid'} justifyContent={'center'}>
          <Link to="/">Home</Link>
        </Grid>
      </Grid>
    </nav>
  )
}

