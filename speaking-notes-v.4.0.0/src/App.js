import './App.css';
import MarkedInput from './components/MarkedInput';
import Preview from './components/Preview';
import { GlobalStyle } from './styles/GlobalStyle.style'
import { NoteProvider } from './components/NoteContext'
import { StyledContainer } from './styles/Container';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NoteProvider>
        <StyledContainer>
          <MarkedInput />
          <Preview />
        </StyledContainer>
      </NoteProvider>
    </div>

  );
}

export default App;
