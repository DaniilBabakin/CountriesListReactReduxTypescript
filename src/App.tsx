import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Main } from './components/Main'

import { Details } from './pages/Details'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}
