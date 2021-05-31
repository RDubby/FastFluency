import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(FLASHCARD_LIST)
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlForm="title">Fast Fluency - HSK Flash Cards</label>
        </div>
      </form>
      <div className="container">
          <FlashcardList flashcards={flashcards} />
      </div>
      </>
  );
}

const FLASHCARD_LIST = [
  {
    id: 1,
    chinese: '你好',
    english: 'Hello',
    pinyin: 'ni hao'
  },
  {
    id: 2,
    chinese: '你好吗?',
    english: 'How are you?',
    pinyin: 'ni hao ma'
  },
  {
    id: 3,
    chinese: '怎么样?',
    english: 'Whats up?',
    pinyin: 'zen me yang'
  },
  {
   id: 4,
   chinese: '早上好',
   english: 'Good Morning',
   pinyin: 'zao shang hao'
  },
  {
   id: 5,
   chinese: '晚上好',
   english: 'Good Evening',
   pinyin: 'wan shang hao'
  },
]

export default App;
