import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import logo from './logo.svg'; // 로고 부분 나중에 이미지 넣을 꺼면 사용
import styled from 'styled-components';
import Login from './Pages/login';
import Main from './Pages/main';
import Sign_up from './Pages/sign_up';
import Find_id from './Pages/find_id';
import Find_pw from './Pages/find_pw';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/sign_up" element={<Sign_up/>}/>
          <Route exact path="/find_id" element={<Find_id/>}/>
          <Route exact path="/find_pw" element={<Find_pw/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App;
