import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {


  return (
    <>
      
       <BrowserRouter basename='/Sakshi'>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
       </Routes>
       
       </BrowserRouter>
    </>
  )
}

export default App
