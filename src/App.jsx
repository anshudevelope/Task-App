import { useState } from 'react'
import './App.css'
import LoginForm from './Components/LoginForm'
import TaskManager from './Components/TaskManager';
import Sidebar from './Components/Sidebar';
import TaskHeader from './Components/TaskHeader';
import Dashboard from './Components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData); 
  };

  return (
    <div>
      {user ? (
        <TaskManager user={user} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}

    </div>
  )
}

export default App
