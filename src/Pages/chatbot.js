import React, { useState, useEffect } from 'react';
import { flaskClient, nodeClient } from '../test/app.js';

function Chatbot() {

    const [flaskData, setFlaskData] = useState([]);
    const [nodeData, setNodeData] = useState([]);

    useEffect(() => {
        // Fetch data from the Flask server
        flaskClient.get('/hello')
          .then(response => {
            setFlaskData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

  return (
    <div>
        <style dangerouslySetInnerHTML={{__html: "\n    .chat-content { height: 350px;  overflow-y: scroll }\n    .line { margin-top: 15px; display: flex }\n    .chat-box { background: #eee; padding: 5px;\n      max-width: 200px }\n    .mine { margin-left: auto }\n  " }} />
        <div className="chat-content">
          <div className="line">
            <span className="chat-box">{JSON.stringify(flaskData, null, 2)}</span>
          </div>
          <div className="line">
            <span className="chat-box mine">안녕?</span>
          </div>
        </div>
        <input className="chat-box" id="input" />
        <button id="send">전송</button>
    </div>
  )
}

export default Chatbot
