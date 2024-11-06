import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) => {
    const newReadingtime = readingtime + time;
    setReadingtime(newReadingtime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !=id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <div className='w-2/3 mx-auto mb-5'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
