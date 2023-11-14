import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.component';
import Book from './components/Book.component';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books/:bookId" element={<Book/>} />
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

