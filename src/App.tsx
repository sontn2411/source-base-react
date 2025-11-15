import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import HomePage from './pages/home'

function App() {
  return (
    <div className='flex flex-col justify-between  '>
      <Header />

      <div className=''>
        <HomePage />
      </div>

      <Footer />
    </div>
  )
}

export default App
