import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="p-3 border rounded bg-white w-75 mx-auto mt-4">
      <h4 className="text-success">Danh Sách Sách</h4>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Năm xuất bản</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                Chưa có sách nào
              </td>
            </tr>
          ) : (
            books.map((book, index) => (
              <tr key={book.id}>
                <th>{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>
                  <button
                    className="btn btn-outline-warning me-2"
                    onClick={() => onEdit(book)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(book.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;