import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './routes/home'
import Set from './routes/set'
import Tracker from './routes/tracker'
import Stats from './routes/stats'
import Setting from './routes/setting'
import { FaSwimmer } from 'react-icons/fa'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home icon={FaSwimmer} />} />
          <Route path="/set" element={<Set />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
