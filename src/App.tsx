import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './auth/login'
import Register from './auth/register'
function App () {

  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route> 
   </Routes>
  )
}

export default App
