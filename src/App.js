import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  useEffect(() => {
    fetch('code.txt')
      .then((res) => res.text())
      .then((text) => setCode(text));
  }, []);
  return (
    <div id="container">
      <div id="source">hello world</div>
    </div>
  );
}

export default App;
