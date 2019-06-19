import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompleteSearch from './AutoComplete/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
     <AutoCompleteSearch/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
