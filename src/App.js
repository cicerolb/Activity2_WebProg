import Counter from './components/Counter'
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import CounterPage from './components/CounterPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />

          <Route path='Home' element={<Home/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='NotFound' element={<NotFound/>}/>
          <Route path='CounterPage' element={<CounterPage/>}/>




        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
