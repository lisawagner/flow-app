import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTitle } from './context/TitleContext';

// styles
import './App.css';

// components
import Layout from './components/Layout/Layout'
import TitleWrapper from './helpers/TitleWrapper';

// pages
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Inbox from './pages/Inbox/Inbox'
import Streams from './pages/Streams/Streams'
import Tasks from './pages/Tasks/Tasks'
import Teams from './pages/Teams/Teams'
import AddStream from './pages/AddStream/AddStream'
import SingleStream from './pages/SingleStream/SingleStream'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
  const { title } = useTitle()

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<Layout />}>
              <Route path="/tasks" element={
                <TitleWrapper title='Tasks'>
                  <Tasks />
                </TitleWrapper>
              } />
              <Route path="/teams" element={
                <TitleWrapper title='Teams'>
                  <Teams />
                </TitleWrapper>
              } />
              <Route path="/streams" element={
                <TitleWrapper title='Streams'>
                  <Streams title="Streams"/>
                </TitleWrapper>
              } />
              <Route path="/streams/:id" element={
                <TitleWrapper title='Stream'>
                  <SingleStream />
                </TitleWrapper>
              } />
              <Route path="/new" element={
                <TitleWrapper title='New'>
                  <AddStream />
                </TitleWrapper>
              } />
              <Route path="/inbox" element={
                <TitleWrapper title='Inbox'>
                  <Inbox />
                </TitleWrapper>
              } />
              <Route path="/profile" element={
                <TitleWrapper title='Profile'>
                  <UserProfile />
                </TitleWrapper>
              } />
              <Route path="/*" element={
                <TitleWrapper title='Home'>
                  <Home />
                </TitleWrapper>
              } />
            </Route>

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
