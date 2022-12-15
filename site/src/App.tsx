import { Navbar } from './assets/elements/Navbar'
import "./assets/css/style.css"
import { AboutMe } from './assets/elements/AboutMe';

function App() {
  return (
    <div>
      <Navbar/>
      <img id='banner' src="./image/assets/banner.svg" alt="" />
      <AboutMe/>
    </div>
  )
}

export default App
