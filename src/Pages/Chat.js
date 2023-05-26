import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:8000/hello');
      setMessages(prevMessages => [...prevMessages, res.data.message]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8000/query/NORMAL',
        { query: inputValue }
      );
      setMessages(prevMessages => [...prevMessages, res.data.Answer]);
      setInputValue('');
      console.log(res);
      setBotResponse(res.data.response);
    } catch (err) {
      console.error(err);
    }
  };


  const handleChange = e => {
    setInputValue(e.target.value);
  };


  return (
    <div>
      <h1>Chat Interface</h1>
      <div>
        {messages.map((message, i) => (
          <div key={i}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <div>
        {botResponse && <p>{botResponse}</p>}
      </div>
    </div>
  );
}

export default Chat;