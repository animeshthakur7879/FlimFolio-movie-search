import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Container from './components/container'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Container/>
      <ToastContainer />
    </div>
  )
}

export default App
