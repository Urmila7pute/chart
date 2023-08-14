import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import userData from '../user.json'
import SimpleSnackbar from "../Common/snackbar";
import axios from 'axios'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" //href="https://mui.com/"
      >
        codeza@gmail.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function ForgotPassword() {
  const [sendCodeStatus, setSendCodeStatus] = React.useState(false);
  const [setNewPassword, setNewPasswordSet] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [email, setEmail] = React.useState("")
  const [openSnackbar, setSnakbar] = React.useState(false)
  const [snackbarMessage, setSnakbarMessage] = React.useState('');
  const [severity, setSeverity] = React.useState("");

  const handleClickShowHidePassword = () => setShowPassword(!showPassword);

  const handleClickShowHideConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmitCode = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      code: data.get("code"),
    });

    // for (var key of data.keys()) {
    //   // here you can add filtering conditions
    //   data.delete(key);
    // }
    if(data.get("code")==3393){
      setSendCodeStatus(false);
      setNewPasswordSet(true);
      setEmail(data.get("email"))
    }
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    setSendCodeStatus(true);
  };
  const handleChangePassword = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(email);

    const json={
      newPassword: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    }
    if(json.newPassword===json.confirmPassword){
      const newUserData = userData.map((ele)=> ({...ele,password:ele.email===email?json.newPassword:ele.password}))
      console.log('newUserData',newUserData, userData, email)
      saveJson(newUserData)
    }else{
      setSnakbarMessage("New password and Confirm password should be same")
                setSnakbar(true)
                setSeverity('error')
    }
  };

  const saveJson =async(users) =>{
    const url = `http://localhost:8000/changePassword`
    try {
        const res = await axios.post(url, users)
        console.log(res)
        document.getElementById("changePasswordForm").reset();
        setSnakbarMessage("Password Changed successful")
        setSnakbar(true)
        setSeverity('success')
        // setUserAddedSuccess(true)
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2ODk0Mzc4NTc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot your password?
          </Typography>
          {setNewPassword ? (
            <Box
              component="form"
              // noValidate
              onSubmit={handleChangePassword}
              sx={{ mt: 1 }}
              id="changePasswordForm"
            >
               <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                disabled
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="newPassword"
                label="New Password"
                name="newPassword"
                autoComplete="newPassword"
                autoFocus
                type={showPassword ? "text" : "password"}
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                autoComplete="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowHideConfirmPassword}
                        onMouseDown={handleClickShowHideConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Change Password
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="signIn" variant="body2">
                    {"Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          ) : (
            <Box
              component="form"
              // noValidate
              onSubmit={sendCodeStatus ? handleSubmitCode : handleSendEmail}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {sendCodeStatus && <TextField
                margin="normal"
                required
                fullWidth
                name="code"
                label="Code"
                type="code"
                id="code"
                autoComplete="code"
                sx={{ visibility: sendCodeStatus ? "visible" : "hidden" }}
                // autoFocus
              />}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {sendCodeStatus ? "Confirm" : "Send Code"}
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="signIn" variant="body2">
                    {"Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          )}
        </Box>
      </Grid>
      <SimpleSnackbar open={openSnackbar} message={snackbarMessage} severity={severity} setFlagClose={setFlagClose}/>
    </Grid>
  );
}
