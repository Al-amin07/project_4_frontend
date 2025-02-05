
import { Outlet } from 'react-router'
import './App.css'
import { selectUser } from './redux/features/user/userSlice'
import { useAppSelector } from './redux/hooks'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
// import Footer from '@/pages/Footer'
function App() {

  const user = useAppSelector(selectUser)
  console.log({ user })

  return (
    <div className=''>

      <Navbar />
      <div className='container min-h-[calc(100vh-200px)] my-24 mx-auto px-5 md:px-3 lg:px-1'>

        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
