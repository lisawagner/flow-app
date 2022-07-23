import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Layout from './components/Layout/Layout'
import TitleWrapper from './helpers/TitleWrapper';
import UserRoute from './components/UserRoute/UserRoute';

// pages - authorized
import Home from './pages/Home/Home'
import Inbox from './pages/Inbox/Inbox'
import Streams from './pages/Streams/Streams'
import Tasks from './pages/Tasks/Tasks'
import Teams from './pages/Teams/Teams'
import AddStream from './pages/AddStream/AddStream'
import SingleStream from './pages/SingleStream/SingleStream'
import UserProfile from './pages/UserProfile/UserProfile'
import NewProject from './pages/NewProject/NewProject'
// pages - public
import FlowLanding from './pages/FlowLanding/FlowLanding';
import GetStarted from './pages/GetStarted/GetStarted';
import NotFound from './pages/NotFound/NotFound';


function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<FlowLanding />}/>
            {/* NotFound needs user prop for conditional redirect */}
            <Route path="/*" element={<NotFound />}/>

            <Route path="/flow" element={
              user
              ? <Navigate to='/home' />
              : <GetStarted />
            } />

            <Route element={<UserRoute />}>
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
                  <TitleWrapper title='Projects'>
                    <Streams title="Projects"/>
                  </TitleWrapper>
                } />
                <Route path="/streams/:id" element={
                  <TitleWrapper title='Stream'>
                    <SingleStream />
                  </TitleWrapper>
                } />
                <Route path="/create" element={
                  <TitleWrapper title='New Project'>
                    <NewProject title="New Project"/>
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

            </Route>

          </Routes>
      </BrowserRouter>
    )}
    </div>
  );
}

export default App;
