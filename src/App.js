import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// styles
import './App.css';

// components
// import Navbar from './components/Navbar/Navbar';
import NavbarRoot from './components/NavbarRoot/NavbarRoot';

// pages
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Inbox from './pages/Inbox/Inbox'
import Streams from './pages/Streams/Streams'
import Tasks from './pages/Tasks/Tasks'
import Teams from './pages/Teams/Teams'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarRoot />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
