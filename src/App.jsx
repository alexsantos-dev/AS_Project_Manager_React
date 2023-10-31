import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Project from './components/pages/Project'
import Mensagens from './components/pages/Mensagens'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Container customClass='min_height'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/newproject' element={<NewProject/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/:id' element={<Project/>}/>
          <Route path='/mensagens' element={<Mensagens/>}/>
        </Routes>
        </Container>
       <Footer/>  
      </BrowserRouter>
    </>  
  )
}

export default App
