import Banner from './components/Banner'
import Map from './components/Map'
import './App.css'
import Stats from './components/Stats'

function App() {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <Banner />
      <Stats />
      <Map />
    </div>
  )
}

export default App
