// src/pages/AddBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    id: '',
    title: '',
    author: '',
    publishDate: '',
    isbn: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/checkout', bookData);  // Replace with your actual API endpoint
      navigate('/checkout');
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  return (
    <div className='w-screen h-screen' id='pg'>
       <nav className="navbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center">
            <div className="shrink-0">
                <img className="logo" src="" alt="Logo" />
              </div>
            </div>
            <div className="nav-links">
              <a to="/" className="home-link">Home</a>
              <a to="/" className="home-a">About Us</a>
              <a to="/" className="home-a">Contact Us</a>
  
            </div>
          </div>
        </div>
      </nav>
    <div className="add-book-container">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={bookData.id}
          onChange={handleChange}
          placeholder="Book ID"
        />
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          type="date"
          name="publishDate"
          value={bookData.publishDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleChange}
          placeholder="ISBN"
        />
        <button type="submit">Submit</button>
        <span class="top"></span>
  <span class="right"></span>
  <span class="bottom"></span>
  <span class="left"></span>
      </form>
    </div>
    </div>
  );
}

export default AddBook;
