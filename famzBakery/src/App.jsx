import { useState } from 'react';
import './App.css'
import AppWrapper from './appWrapper/AppWrapper';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppWrapper />
    </>
  )
}

export default App
