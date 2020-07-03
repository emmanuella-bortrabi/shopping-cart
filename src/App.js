import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar';
import Main from './Component/Main';

function App() {
  return (
    <div className="App">
      <div className="container" >
        <div class="row">
          <div id="col-2">
             <Sidebar></Sidebar>
          </div>
          <div class="col-10" >
            <Main></Main>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
