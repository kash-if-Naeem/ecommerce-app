import './App.css';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  console.log(isAuth);
  return (
    
      <Routes>
        <Route path='/' element={<Login />} />
      
        {isAuth && (
          <Route path='/dashboard' element={<Dashboard />} />
        )}
        
        <Route path='*' element={<Navigate to={isAuth ? '/dashboard' : '/'} />} />

      </Routes>
    
  );
}

export default App;
