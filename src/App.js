import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/:page' element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
