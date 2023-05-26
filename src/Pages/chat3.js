import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newMessage = {
      sender: 'user',
      text: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Send the chat message to the server
    fetch('http://localhost:8000/query/NORMAL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        const answerMessage = {
          sender: 'bot',
          text: data.Answer,
        };
        setMessages([...messages, answerMessage]);
        console.log(answerMessage)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;