import React, { useState, useEffect } from 'react';
import {v1 as uuid} from 'uuid'
import axios from 'axios';
import './css/sty.css';

const Chat5 = () => {
  const [myName] = useState('USER');
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



  const createMessageTag = (LR_className, senderName, message, imageUrl) => {
    return (
      <li key={uuid()} className={LR_className}>
        <div className="sender">
          <span>{senderName}</span>
        </div>
        <div className="message">
          <span>{message}</span>
        </div>
        {
          imageUrl && imageUrl !=='nan' && imageUrl !== '없음' && <div>
            <img src={imageUrl} />
          </div>
        }
      </li>
    );
  };

  const appendMessageTag = (LR_className, senderName, message, imageUrl) => {
    const chatLi = createMessageTag(LR_className, senderName, message, imageUrl);
    setMessages(prevMessages => [...prevMessages, chatLi]);
  };

  const sendMessage = (message) => {
    const data = {
      senderName: 'USER',
      message: message,
    };
    receive(data);
  };

  const clearTextarea = () => {
    document.querySelector('div.input-div textarea').value = '';
  };

  const receive = (data) => {
    const LR = data.senderName !== myName ? 'left' : 'right';
    appendMessageTag(LR, data.senderName, data.message, data.imageUrl);
  };

  const triggerGhatGpt = async (message) => {
    sendMessage(message);
    setInputValue('')
    try {
      const res = await axios.post(
        'http://localhost:8000/query/NORMAL',
        { query: inputValue }
      );
      // setMessages(prevMessages => [...prevMessages, res.data.Answer]);
      appendMessageTag("", "BOT", res.data.Answer, res.data.imageUrl)
      console.log(res);
      setBotResponse(res.data.response);
    } catch (err) {
      console.error(err);
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      // const message = e.target.value;
      // sendMessage(message);
      triggerGhatGpt(inputValue)
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   const res = await axios.post(
    //     'http://localhost:8000/query/NORMAL',
    //     { query: inputValue }
    //   );
    //   setMessages(prevMessages => [...prevMessages, res.data.Answer]);
    //   setInputValue('');
    //   console.log(res);
    //   setBotResponse(res.data.response);
    // } catch (err) {
    //   console.error(err);
    // }
    triggerGhatGpt(inputValue);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="chat_wrap">
      <div className="header">CHAT</div>
      <div className="chat">
        <ul>{messages}</ul>
      </div>
      <div className="input-div">
        <textarea
          placeholder="Press Enter to send a message."
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={inputValue}
        ></textarea>
        {/* <button onClick={handleSubmit}>Send</button> */}
      </div>
    </div>
  );
};

export default Chat5;















// import React, { useState } from 'react';
// import './css/sty.css';

// const Chat5 = () => {
//   const [myName] = useState('blue');
//   const [messages, setMessages] = useState([]);

//   const handleKeyDown = (e) => {
//     if (e.keyCode === 13 && !e.shiftKey) {
//       e.preventDefault();
//       const message = e.target.value;
//       sendMessage(message);
//       clearTextarea();
//     }
//   };

//   const createMessageTag = (LR_className, senderName, message) => {
//     return (
//       <li className={LR_className}>
//         <div className="sender">
//           <span>{senderName}</span>
//         </div>
//         <div className="message">
//           <span>{message}</span>
//         </div>
//       </li>
//     );
//   };

//   const appendMessageTag = (LR_className, senderName, message) => {
//     const chatLi = createMessageTag(LR_className, senderName, message);
//     setMessages((prevMessages) => [...prevMessages, chatLi]);
//   };

//   const sendMessage = (message) => {
//     const data = {
//       senderName: 'blue',
//       message: message,
//     };
//     receive(data);
//   };

//   const clearTextarea = () => {
//     document.querySelector('div.input-div textarea').value = '';
//   };

//   const receive = (data) => {
//     const LR = data.senderName !== myName ? 'left' : 'right';
//     appendMessageTag(LR, data.senderName, data.message);
//   };

//   return (
//     <div className="chat_wrap">
//       <div className="header">CHAT</div>
//       <div className="chat">
//         <ul>{messages}</ul>
//       </div>
//       <div className="input-div">
//         <textarea
//           placeholder="Press Enter to send a message."
//           onKeyDown={handleKeyDown}
//         ></textarea>
//       </div>
//     </div>
//   );
// };

// export default Chat5;