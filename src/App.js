import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  console.log(messages);

  const sendMessage = (e) => {
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>send msg</button>

      {/* messages */}
      {messages.map((msg) => (
        <p>{msg}</p>
      ))}
    </div>
  );
}

export default App;
