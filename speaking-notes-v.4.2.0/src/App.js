// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import NavbarComp from './components/NavbarComp';
import Preview from './components/Preview';
import Editor from './components/Editor';
import Help from './components/Help';
import { NoteProvider } from './components/NoteContext';
import { GlobalStyle } from './styles/GlobalStyle.style'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NoteProvider>
      <Router>
      <NavbarComp/>
        <Routes>
          <Route path="/" element={ <Editor /> } />
          <Route path="/preview" element={ <Preview /> } />
          <Route path="/help" element={ <Help /> } />
        </Routes>
      </Router>
      </NoteProvider>       
    </div>
  );
}

export default App;
