import './App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Main() {
    return (
      <div className="App">
        <header className="App-header">
          <body>
            <div class="bg-gray-50 dark:bg-gray-800">
              <div class="flex flex-col justify-center items-center">  
                <div class="text-center">컴퓨터 공학 학사정보 챗봇 입니다.</div> 
                <div class="text-center">사용하기에 앞서 로그인을 부탁드립니다, 없으시면 가입 후 진행하세요</div>
                <div class="flex flex-row gap-3">
                    <Grid container>
                        <Grid item xl>
                            <Link to="/login"><Button type="submit" variant='contained' sx={{ mr : 1 ,mt : 3, mb : 2, bgcolor: 'success.main'}}>로그인</Button></Link>
                            <Link to="/sign_up"><Button type="submit" variant='contained' sx={{ ml : 1, mt : 3, mb : 2, bgcolor: 'success.main'}}>회원 가입</Button></Link>
                        </Grid>
                    </Grid>
                </div>
              </div>
            </div>
          </body>
        </header>
      </div>
    );
  }
  
  export default Main;