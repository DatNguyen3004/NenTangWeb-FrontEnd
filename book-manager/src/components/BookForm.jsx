import { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, editBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setYear(editBook.year);
    } else {
      setTitle('');
      setAuthor('');
      setYear('');
    }
  }, [editBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) return;

    const book = {
      id: editBook?.id,
      title,
      author,
      year
    };

    onSubmit(book);

    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <div className="p-2 border rounded bg-white container-sm" style={{ width: '40%' }}>
      <form className="ps-4 pe-4" onSubmit={handleSubmit}>
        <h4 className="mt-3 mb-3 text-danger">
          {editBook ? 'Cập nhật Sách' : 'Thêm Sách'}
        </h4>

        <div className="mb-3">
          <label className="form-label">Tiêu đề sách</label>
          <input
            type="text"
            className="form-control border border-secondary-subtle rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tác giả</label>
          <input
            type="text"
            className="form-control border border-secondary-subtle rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Năm xuất bản</label>
          <input
            type="text"
            className="form-control border border-secondary-subtle rounded"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="text-end">
          <button
            type="submit"
            className={`btn ${editBook ? 'btn-outline-success' : 'btn-outline-primary'} ps-4 pe-4 mt-2 mb-3`}
          >
            {editBook ? 'Cập nhật' : 'Thêm'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
