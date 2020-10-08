import React from 'react';
import './App.css';
import Home from './screens/Home';
import { SnackbarProvider } from 'notistack';





function App() {
  return (
    
      <div className="App">
        <SnackbarProvider>
        <Home></Home>   
        </SnackbarProvider>  
      </div>
    
  );
}

export default App;
