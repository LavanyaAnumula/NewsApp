import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyBlogs from './pages/MyBlogs'
import AllNews from './pages/AllNews'
import Favourites from './pages/Favourites'

const App = () => {
  return (
    <div className='h-screen p-4'>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<AllNews />} />
          <Route path='/favourite' element={<Favourites />} />
          <Route path='*' element={<MyBlogs />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App