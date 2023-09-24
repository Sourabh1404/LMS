// App.js
import React from 'react';
import './App.css';
import {  Routes ,Route} from 'react-router-dom';
import Main from './components/Main';
import Book from './components/Book';
import About from './components/Cart';
import BookDetail from './components/BookDetail';
// import BookDetail from './components/BookDetail';



function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Main/>}></Route>
      <Route path={'/Books'} element={<Book/>}></Route>
      <Route path={'/About'} element={<About/>}></Route>
      <Route path={'/api/books/book/:id'} element={<BookDetail />} />
    </Routes>
    </>
  );
  }

export default App;
