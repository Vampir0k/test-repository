import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Казьмин Дмитрий Станиславович и Бредин Иван Евгеньевич";

  console.log('This is App ');
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
    </div>
  );
}

export default App;
