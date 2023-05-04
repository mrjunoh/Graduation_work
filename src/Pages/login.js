import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css';

//자동완성 기능 사용할꺼면 autoComplete="email", autoComplete="password" 기입

export default function Login(){
    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                <Avatar sx ={{m:1, bgcolor:'secondary.main'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <TextField margin="normal" label="Email Address" required fullWidth name="email" autoFocus/>
                <TextField margin="normal" label="Password" type="password" required fullWidth name="password"/>
                <FormControlLabel control={<Checkbox value="remember" clolor="primary" />} label="계정 저장"/>
                <Button type="submit" fullWidth variant='contained' sx={{ mt : 3, mb : 2}}>로그인</Button>
                <Grid container>
                    <Grid item xs>
                        <Link>비밀번호 찾기</Link>
                    </Grid>
                    <Grid item xs>
                        <Link>계정 만들기</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
