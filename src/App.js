import { useEffect, useRef, useState } from 'react';
import './App.css';
import Message from './Message';
const chunk_speed = 5;

function App() {
  const [code, setCode] = useState('');
  const [source, setSource] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messageType, setMessageType] = useState('denied');
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef(null);
  const pRef = useRef(null);
  const addChunk = () => {
    if (isLocked) return;
    setCurrentIndex(currentIndex + chunk_speed);
    setSource(code.substring(0, currentIndex));
    pRef.current.scrollIntoView();
    if (currentIndex !== 0 && currentIndex % 300 === 0) {
      setIsLocked(true);
      setMessageType('denied');
    }
    if (currentIndex !== 0 && currentIndex % 900 === 0) {
      setIsLocked(true);
      setMessageType('success');
    }
  };
  const removeMessage = () => {
    setIsLocked(false);
  };
  const handleKeyDown = (e) => {
    if (e.key !== 'Escape') addChunk();
    else removeMessage();
  };
  useEffect(() => {
    containerRef.current.focus();
    fetch('code.txt')
      .then((res) => res.text())
      .then((text) => setCode(text));
  }, []);
  return (
    <>
      <div
        id="container"
        onKeyDown={handleKeyDown}
        tabIndex="0"
        ref={containerRef}
      >
        <div id="source">{source}</div>
        <p ref={pRef}></p>
      </div>
      {isLocked && <Message type={messageType} />}
    </>
  );
}

export default App;
