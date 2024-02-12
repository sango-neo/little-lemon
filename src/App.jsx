import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

function App() {

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </>
  )
}

export default App