import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import logo from './logo.svg'; // 로고 부분 나중에 이미지 넣을 꺼면 사용
import styled from 'styled-components';
import Login from './Pages/login';
import Main from './Pages/main';
import Sign_up from './Pages/register'; 
import Find_id from './Pages/find_id';
import Find_pw from './Pages/find_pw';
import Chatbot from './Pages/chatbot';
import Chat from './Pages/Chat';
import Chat2 from './Pages/Chat2.js';
import Chat3 from './Pages/chat3';
import Chat4 from './Pages/Chat4'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Sign_up/>}/>
          <Route exact path="/find_id" element={<Find_id/>}/>
          <Route exact path="/find_pw" element={<Find_pw/>}/>
          <Route exact path="/chatbot" element={<Chatbot/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
          <Route exact path="/chat2" element={<Chat2/>}/>
          <Route exact path="/chat3" element={<Chat3/>}/>
          <Route exact path="/chat4" element={<Chat4/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App;
