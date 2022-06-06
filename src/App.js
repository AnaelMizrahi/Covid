import RegisterPage from './RegisterPage'
import SummaryPage from './SummaryPage'
import { Container, Navbar } from 'react-bootstrap'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
       <header>
      <Navbar bg="light" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="dark" expand="lg" ></Navbar>
      <br></br>
    </header>
        <main className='py3'>
          <Container>
            <Routes>
            <Route path='/' element={<RegisterPage />} />
            <Route path='/summary' element={<SummaryPage />} />
            </Routes>
          </Container>
        </main>
    </Router>
  );
}

