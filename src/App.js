import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home'
import Hotel from './pages/home/hotel/Hotel';
import List from './pages/home/list/List';



function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App; 