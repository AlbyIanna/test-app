import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        backgroundColor: '#ccc',
      }}>
        <h1>My App</h1>
      </header>
      <div role='main' style={{
        overflow: 'hidden',
        padding: '2rem'
      }}>
        <Outlet />
      </div>
    </>
  )
}

export default App
