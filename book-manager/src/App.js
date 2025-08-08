import './App.css';
import React, { useState, useEffect } from 'react';

import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie", year: 1936 },
      { id: 2, title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", author: "Rosie Nguyễn", year: 2016 }
    ];
  });

  const [editingBook, setEditingBook] = useState(null);

  const handleAddOrUpdate = (book) => {
    if (book.id) {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
      setEditingBook(null);
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = (id) => {
  const confirmed = window.confirm('Bạn có chắc muốn xóa cuốn sách này không?');
    if (confirmed) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

  return (
    <div>
      <div class="bg-light">
        <h2 class="mb-3 p-2 text-primary text-center">Quản Lý Sách</h2>
        <BookForm onSubmit={handleAddOrUpdate} editBook={editingBook} />
        <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;