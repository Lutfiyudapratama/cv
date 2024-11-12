import React from 'react';
import { useState } from 'react';
import { Header } from './Component/Header';
import Profile from './Component/Profile'; 

const App = function app() {
  const [count, setcount] = useState(0)
  return (
    <>
      <Header />
      <Profile />
    </>
  )
}

export default App