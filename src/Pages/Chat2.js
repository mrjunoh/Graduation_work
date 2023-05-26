import React, { useState } from 'react';
import axios from 'axios';

function Chat2() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/query/NORMAL', { query: userInput });
      setBotResponse(res.data.response);
    } catch (error) {
      console.log(error);
    }
    setUserInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      {botResponse && <p>{botResponse}</p>}
    </div>
  );
}

export default Chat2;