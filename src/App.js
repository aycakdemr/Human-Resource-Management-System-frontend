import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import JobSeekerList from './pages/JobSeekerList';


function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi/>
        <Dashboard/>
  
      </Container>
    </div>
  );
}

export default App;
