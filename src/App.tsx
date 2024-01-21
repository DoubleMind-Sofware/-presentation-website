// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function  App() {
  return (
    <Router>
        <h1>Header e footer</h1>         
        <Route path="/" element={<HomePage />} />
    </Router>
  );
};


export default App;
