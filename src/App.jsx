// ext imports
import { Routes, Route } from 'react-router-dom'

// int imports
import './App.css'
import HomePage from './Pages/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import AboutPage from './Pages/AboutPage';
import MenuPage from './Pages/MenuPage';
import ReservationsPage from './Pages/ReservationsPage';
import OrderPage from './Pages/OrderPage';
import LoginPage from './Pages/LoginPage';
import ConfirmBookingPage from './components/Booking/ConfirmBookingPage';

function App() {

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/#menu' element={<MenuPage />} /> */}
        <Route path='/reservations' element={<ReservationsPage />} />
        <Route path='/order-online' element={<OrderPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/booking-confirmation' element={<ConfirmBookingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App