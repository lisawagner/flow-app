import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Layout from './components/Layout/Layout'
import TitleWrapper from './helpers/TitleWrapper';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

// pages
import Home from './pages/Home/Home'
import Inbox from './pages/Inbox/Inbox'
import Streams from './pages/Streams/Streams'
import Tasks from './pages/Tasks/Tasks'
import Teams from './pages/Teams/Teams'
import AddStream from './pages/AddStream/AddStream'
import SingleStream from './pages/SingleStream/SingleStream'
import UserProfile from './pages/UserProfile/UserProfile'
import GetStarted from './pages/GetStarted/GetStarted';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            
            <Route path="/*" element={<GetStarted />}/>
            <Route path="/flow" element={<GetStarted />}/>

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
              <Route path="/home" element={
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
