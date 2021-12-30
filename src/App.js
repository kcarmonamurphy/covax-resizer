import './App.css'
import Hero from './Hero'
import FileHandler from './FileHandler'
import Previews from './Previews'

function App() {
  return (
    <div className="App">
      <Hero />
      <section>
        <FileHandler />
        <Previews />
      </section>
    </div>
  );
}

export default App;
