import { FormControl, Input, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
// import { Flipper, Flipped } from 'react-flip-toolkit';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapShot) => {
        setMessages(
          snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() })),
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: username, message: input }]); // ES6, append object at the end of messages array
    setInput('');
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt="logo"
        className="img__logo"
      />
      <h1>Hello Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input} // diable btn when input is empty
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
};

export default App;
