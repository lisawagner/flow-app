import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// styles
import './App.css';

// components


// pages
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Inbox from './pages/Inbox/Inbox'
import Streams from './pages/Streams/Streams'
import Tasks from './pages/Tasks/Tasks'
import Teams from './pages/Teams/Teams'
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
