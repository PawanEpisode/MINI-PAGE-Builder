// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <PageContainer />
      <Sidebar />
    </div>
  );
}

export default App;
