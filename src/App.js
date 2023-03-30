import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <main className=''>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
    </main>
  );
}

export default App;
