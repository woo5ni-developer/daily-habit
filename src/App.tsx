import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
