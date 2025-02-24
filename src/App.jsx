import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Comp/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Gallery from './Comp/Gallery'
import Signup from './Comp/Signup'
import Signin from './Comp/Signin'

function App() {
  return(
  <>
  <Router>
  <Routes>
  <Route path='/'  element={<Home />}/>
  <Route path='/gallery' element={<Gallery />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/signin' element={<Signin />} />
  </Routes>
  </Router>
  </>  
  )}

export default App
