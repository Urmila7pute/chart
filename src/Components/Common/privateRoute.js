import { Navigate } from 'react-router-dom';

export function PrivateRoute({ Component, ...rest }) {
    const loggedIn = localStorage.getItem("loggedIn")
    console.log('loggedIn', loggedIn)
    return !loggedIn ?  <Navigate to="/signIn" /> : <Component />
}