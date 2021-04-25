import React from 'react'
import AppProvider from "./contextapi/contexts/AppContext";
import ElevatusTask from './ElevatusTask'
function App() {
  return (
    <>
    <AppProvider>
      <ElevatusTask/>
    </AppProvider>
    </>
  );
}

export default App;
