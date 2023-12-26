// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PageContainer from './components/PageContainer';

function App() {
  const [elements, setElements] = useState([]);
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <PageContainer elements={elements} setElements={setElements}/>
      <Sidebar elements={elements} />
    </div>
  );
}

export default App;
