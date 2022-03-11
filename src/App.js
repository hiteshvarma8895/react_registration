import Login from './components/login/login';
import{Routes,Route} from 'react-router-dom';

import './App.css';
import HomePage from './components/homepage/HomePage';
import ErrorPage from './components/errorpage/errorpage'

import Signup from './components/signup/Signup';



function App() {
  return (
    <div className="App">
      <Routes>
        
      <Route path='/' element={<Login/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      <Route path="Signup" element={<Signup />} />

      </Routes>
     
    </div>
  );
}

export default App;
