import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios'
import userData from "../user.json"
import SimpleSnackbar from '../Common/snackbar';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [allfileData, setAllFileData] = React.useState(userData)
    const [openSnackbar, setSnakbar] = React.useState(false)
    const [snackbarMessage, setSnakbarMessage] = React.useState('');
    const [userAddedSuccess, setUserAddedSuccess] =React.useState(false);
    const [severity, setSeverity] = React.useState("");
    const navigate = useNavigate();

  const handleClickShowHidePassword = () => setShowPassword(!showPassword);
    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const jsonData={
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get('email'),
        password: data.get('password')
        }
        allfileData.push(jsonData)
        saveJson(allfileData)
    };

    const saveJson =async(users) =>{
        const url = `http://localhost:8000/signup`
        try {
            const res = await axios.post(url, users)
            console.log(res)
            document.getElementById("signupForm").reset();
            setSnakbarMessage("Sign Up successful")
            setSnakbar(true)
            setSeverity('success')
            setUserAddedSuccess(true)
        } catch (error) {
            console.log('error', error)
        }
        

    }

    const setFlagClose =()=>{
        setSnakbarMessage("")
        setSnakbar(false)
        setSeverity('')
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2ODk0Mzc4NTc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                   { userAddedSuccess?
                    <Box sx={{ mt: 1 }}>
                    <Grid item xs={12}>
                                User Added successful please sign in
                            </Grid>
                            <Button
                            onClick={()=>{navigate('/signIn')}}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                            </Box>
                    :
                    <Box component="form" id="signupForm" noValidate onSubmit={handleSubmitSignUp} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword?"text":"password"}
                                    id="password"
                                    autoComplete="new-password"
                                    InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowHidePassword}
                                              onMouseDown={handleClickShowHidePassword}
                                            >
                                              {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="signIn" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>}
                   
                </Box>
            </Grid>
            <SimpleSnackbar open={openSnackbar} message={snackbarMessage} severity={severity} setFlagClose={setFlagClose}/>
        </Grid>
    );
}
