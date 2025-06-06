import './css/App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Shortcuts from './components/Shortcuts';
 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Logo />
        <SearchBar />
        <Shortcuts />
      </main>
    </div>
  );
}

export default App;
