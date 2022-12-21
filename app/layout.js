import '../styles/globals.css'
import Navbar from './components/Navbar'

export default function Layout({ children }) {
  return (
    <div className='dark'>
      <Navbar />
      {children}
    </div>
  )
}
