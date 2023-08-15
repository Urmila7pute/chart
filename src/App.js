import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/Login/signIn';
import SignUp from './Components/Login/signUp';
import ForgotPassword from './Components/Login/forgotPassword';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Dashboard from './Components/Dashboard';
import InProgressPage from './Components/InProgressPage';
import { PrivateRoute } from './Components/Common/privateRoute';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: orange[500]
    },
    primary: {
      main: '#b66dff'
    },
    icon: {
      color: '#bba8bf'
    },
    h1: {
      color: '#b66dff'
    },
    backgroundColorMain: {
      backgroundColor: "#f2edf3"
    },
    drawerMenuText: {
      color: "#3e4b5b"
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<PrivateRoute Component={Dashboard}/>} />
            <Route path="/orders" element={<PrivateRoute Component={InProgressPage} />} />
            <Route path="/customers" element={<PrivateRoute Component={InProgressPage} />} />
            <Route path="/reports" element={<PrivateRoute Component={InProgressPage} />} />
            <Route path="/integrations" element={<PrivateRoute Component={InProgressPage} />} />
            <Route path="/currentmonth" element={<PrivateRoute Component={InProgressPage} />} />
            <Route path="/about" element={<PrivateRoute Component={Dashboard} />} />
            <Route path="*" element={<h1> No Page Found</h1>} />

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
