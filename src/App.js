import Login from './components/login/Login';
import{Routes,Route} from 'react-router-dom';
import './App.scss';
import HomePage from './components/homepage/HomePage';
import ErrorPage from './components/errorpage/errorpage'
import Signup from './components/signup/Signup';
import Navbar from './components/navbar/Navbar';



function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="Signup" element={<Signup />} />
        <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
