import './App.css';
import PersonajeContainer  from './components/PersonajeContainer';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" alt="" />
        </div>
      </nav>

      <PersonajeContainer />
    </div>
  );
}

export default App;
