import { GlobalStyle } from './styles/GlobalStyle.style'
import { NoteProvider } from './components/NoteContext'
import { NavBar } from './components/NavBar';
import { Route,  Routes } from 'react-router-dom';
import MarkedInput from './components/MarkedInput';
import Preview from './components/Preview';
import Help from './components/Help';

function App() {
  return (
    <>
      <GlobalStyle />
      <NoteProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<MarkedInput />} />
        <Route path="preview" element={<Preview />} />
        <Route path="help" element={<Help />} />
      </Routes>
      </NoteProvider>
    </>

  );
}

export default App;
