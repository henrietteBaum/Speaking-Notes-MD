import './App.css';
import MarkedInput from './components/MarkedInput';
import Preview from './components/Preview';
import { GlobalStyle } from './styles/GlobalStyle.style'
import { NoteProvider } from './components/NoteContext'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NoteProvider>
        <MarkedInput />
        <Preview />
      </NoteProvider>
    </div>
  );
}

export default App;
