// import React from 'react';
// import './css/style.css';

// class Chat4 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       inputValue: ''
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ inputValue: event.target.value });
//   };

//   handleSendMessage = () => {
//     const { inputValue, messages } = this.state;

//     if (inputValue.trim() === '') {
//       return;
//     }

//     const newMessage = {
//       sender: 'user',
//       text: inputValue
//     };

//     this.setState({
//       messages: [...messages, newMessage],
//       inputValue: ''
//     });

//     // Send the chat message to the server
//     fetch('http://localhost:8000/query/NORMAL', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ query: inputValue })
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const answerMessage = {
//           sender: 'bot',
//           text: data.Answer
//         };
//         this.setState({
//           messages: [...messages, answerMessage]
//         });
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   componentDidMount() {
//     document.querySelector('#send-button').addEventListener('click', this.handleSendMessage);
//   }

//   componentWillUnmount() {
//     document.querySelector('#send-button').removeEventListener('click', this.handleSendMessage);
//   }

//   render() {
//     const { messages, inputValue } = this.state;

//     return (
//       <div className="wrapper">
//         <div className="user-container">
//           <label htmlFor="nickname">Nickname:</label>
//           <input type="text" id="nickname" />
//         </div>
//         <div className="display-container">
//           <ul className="chatting-list">
//             {messages.map((message, index) => (
//               <li key={index} className={`message ${message.sender}`}>
//                 {message.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="input-container">
//           <span>
//             <input
//               type="text"
//               className="chatting-input"
//               value={inputValue}
//               onChange={this.handleInputChange}
//               id="input"
//             />
//             <button id="send-button" className="send-button">
//               Send
//             </button>
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default Chat4;


import React from 'react';
import './css/style.css';

class Chat4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSendMessage = () => {
    const { inputValue, messages } = this.state;

    if (inputValue.trim() === '') {
      return;
    }

    const newMessage = {
      sender: 'user',
      text: inputValue
    };

    this.setState({
      messages: [...messages, newMessage],
      inputValue: ''
    });

    // Send the chat message to the server
    fetch('http://localhost:8000/query/NORMAL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: inputValue })
    })
      .then((response) => response.json())
      .then((data) => {
        const answerMessage = {
          sender: 'bot',
          text: data.Answer
        };
        this.setState({
          messages: [...messages, answerMessage]
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    const { messages, inputValue } = this.state;

    return (
      <div className="wrapper">
        <div className="user-container">
          <label htmlFor="nickname">대화명</label>
          <input type="text" id="nickname" />
        </div>
        <div className="display-container">
          <ul className="chatting-list">
            {messages.map((message, index) => (
              <li key={index} className={`message ${message.sender}`}>
                {message.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="input-container">
          <span>
            <input
              type="text"
              className="chatting-input"
              value={inputValue}
              onChange={this.handleInputChange}
            />
            <button className="send-button" onClick={this.handleSendMessage}>
              전송
            </button>
          </span>
          <script>
            
          </script>
        </div>
      </div>
    );
  }
}

export default Chat4;



// import React from 'react';
// import './css/style.css';

// class Chat4 extends React.Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <div className="user-container">
//           <label htmlFor="nickname">대화명</label>
//           <input type="text" id="nickname" />
//         </div>
//         <div className="display-container">
//           <ul className="chatting-list"></ul>
//         </div>
//         <div className="input-container">
//           <span>
//             <input type="text" className="chatting-input" />
//             <button className="send-button">전송</button>
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default Chat4;
