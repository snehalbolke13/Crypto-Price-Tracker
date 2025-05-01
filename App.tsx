import React from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyPanel from './components/PropertyPanel';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Canvas />
      <PropertyPanel />
    </div>
  );
};

export default App;
