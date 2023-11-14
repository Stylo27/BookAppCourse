import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Book from './pages/Book';
import { IBook } from '../models/book'

export default function App() {


  const books: IBook[] = [
    {
      id: 1,
      title: 'The Witcher',
      author: 'Sapkovsky',
      rating: 10
    },
    {
      id: 2,
      title: 'IT',
      author: 'King',
      rating: 9.3
    },
  ];


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/books/:bookId" element={<Book books={books}/>} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export function Navigation() {
  return(
    <nav>
      <Link to="/">Home</Link>
    </nav>
  )
}

