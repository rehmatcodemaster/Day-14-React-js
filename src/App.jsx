import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Info from './pages/main'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import { Route, Routes } from 'react-router-dom'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/info' element={<Info />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <h1 className='text-3xl font-bold underline text-center mt-10'>Hello world!</h1>
      <Footer />
    </div>
  )
}

export default App
