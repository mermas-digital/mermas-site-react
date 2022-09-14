import './app.css';
import { About } from './components/about';
import { Activity } from './components/activity';
import Course from './components/course';
import { Navbar } from './components/header';
import { Home } from './components/home';
import { Register } from './components/register';
function App() {
  return (
    <div className="body_complete">
      <Navbar />

      <div className="container-home">
        <Home />
      </div>
      <About />
      <Course />
      <Activity />
      <Register />
    </div>
  );
}

export default App;
