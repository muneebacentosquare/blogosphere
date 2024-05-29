import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return JSON.parse(tokenString);
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        return JSON.parse(userString);
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL: "http://blogosphere.app.test/api/v1/",
        headers: {
            "content-type": "application/json"
        }
    });

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}
