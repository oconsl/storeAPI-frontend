import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/:page' element={<MainPage />} />
        <Route path='*' element={<Navigate to='/:page' replace />} />
      </Routes>
    </div>
  )
}

export default App
