import React from 'react';
import '../styles/App.scss';
import Navigation from './Navigation.js'
import Cards from './Cards'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards/>
          <Sidebar/>
        </div>
      </main>
    </div>
  );
}

export default App;
