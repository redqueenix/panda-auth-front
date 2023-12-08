import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {useState} from "react";
import {userLogin} from "../store/auth/auth.action.ts";
import {Login} from "../models/auth.model.ts";
import {TextField, Button, Container, Box, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | undefined>(undefined);
    const handleLogin = async () => {
        if (username && password) {
            const loginBody = new Login(username, password);
            const result = await dispatch(userLogin(loginBody));
            if (result.type === "auth/userLogin/rejected") {
                setError("Invalid username or password");
            }
        } else {
            setError("Invalid username or password");
        }

    };

    return (
        <Container component="main" maxWidth="xs">
            <h2>Authentication Page</h2>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <LockOutlinedIcon sx={{fontSize: 'x-large'}}/>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <Typography variant="body2" color="error" sx={{mt: 1}}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{mt: 3, mb: 2}}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </Container>
    );

};

export default LoginComponent;