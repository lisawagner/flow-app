import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Layout from './components/Layout/Layout'
import TitleWrapper from './helpers/TitleWrapper';
import UserRoute from './components/UserRoute/UserRoute';

// pages - authorized
import Home from './pages/Home/Home'
import Inbox from './pages/Inbox/Inbox'
import Projects from './pages/Projects/Projects'
import Tasks from './pages/Tasks/Tasks'
import Teams from './pages/Teams/Teams'
import SingleProject from './pages/SingleProject/SingleProject'
import UserProfile from './pages/UserProfile/UserProfile'
import NewProject from './pages/NewProject/NewProject'
import Overview from './components/SingleProjectViews/Overview'
import ListView from './components/SingleProjectViews/ListView'
import BoardView from './components/SingleProjectViews/BoardView';
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
                <Route path="/projects" element={
                  <TitleWrapper title='Projects'>
                    <Projects title="Projects"/>
                  </TitleWrapper>
                } />
                <Route path="/projects/:id" element={
                  <TitleWrapper title=''>
                    <SingleProject />
                  </TitleWrapper>
                } >
                  <Route path="overview" element={<Overview />} />
                  <Route path="list" element={<ListView />} />
                  <Route path="board" element={<BoardView />} />

                </Route>

                <Route path="/create" element={
                  <TitleWrapper title='New Project'>
                    <NewProject />
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
