import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './pages/Layout';
import Timer from './pages/Timer';
import Todo from './pages/Todo'
import NotFound from './pages/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/timer' element={<Timer />}/>
          <Route path='todo' element={<Todo />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
