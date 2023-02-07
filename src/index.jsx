import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './utils/style/globalStyle.css'

// Pages
import Home from './pages/Home'
import ApartmentCard from './pages/ApartmentCard'
import APropos from './pages/Apropos'

// Components
import Header from './components/Header'
import PageNotFound from './components/Page Not Found'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>

    <Header />

      <div className='globalStyle'>
    
      <Routes>

        <Route exact path='/' element={<Home />}>
        </Route>

        <Route exact path='/a-propos' element={<APropos />}>
        </Route>

        <Route exact path='/apartments/:apartmentId' element={<ApartmentCard />}>
        </Route>

        <Route path='*' element={<PageNotFound />}>
        </Route>

      </Routes>

      </div>

    <Footer />

    </Router>

  </React.StrictMode>
);

