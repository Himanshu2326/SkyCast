

import './App.css'
import { useState, useEffect } from 'react';
import SkyCast from './components/Main/SkyCast';
import Loader from './components/Loader/Loader';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SkyCast />
    </>
  )
}

export default App
