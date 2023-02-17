import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Project from './Components/Project/Project.jsx';
import Contact from './Components/Contact/Contact.jsx';

function App() {
  return (
    <>
        <Sidebar/>
        <main className='main'>
          <Home/>
          <About/>
          <Project/>
          <Contact/>
        </main>
    </>

  );
}

export default App;
