import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.scss';
import AllProjects from './pages/AllProjects';
import More from './pages/More';
import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import Main from './components/Main'
import MySkills from './components/Myskills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='/AllProjects/' element={<AllProjects />} />
          <Route path='/More/' element={<More />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <Main />
      <AboutMe />
      <MySkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
