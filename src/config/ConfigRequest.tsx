import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

type User = {
    id: string;
    name: string;
    email: string;
    // add any other user properties
}

type Menu = {
    id: number,
    name: string,
    description: string,
    image: string,
}

type Token = {
    value: string;
    // add any other token properties
}

type Status = 'error' | 'warning' | 'info' | 'success';

export const ConfigRequest = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState<Token | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        navigate('/');
    };

    // Destroy Session
    function destroySessionAndNavigateToLogin(): void {
        document.cookie = 'session_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict'; 
        localStorage.removeItem('details');
        navigate('/login');
    }


    //create session
    function generateToken(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      
      // Set the token in a session cookie
      function setSessionToken(): void {
        const token = generateToken(32);
        document.cookie = `session_token=${token}; SameSite=Strict`;
      }


      // Checking session status (Active or In-active)
      function isSessionActive(): boolean {
        const sessionToken = getCookie('session_token');
        return sessionToken !== null;
      }
      
      function getCookie(name: string): string | null {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
          return parts.pop()?.split(';').shift() || null;
        }
        return null;
      }

    const saveToken = (user: User, token: Token) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/');
    }

    const getToken = (): Token | null => {
        const tokenString = localStorage.getItem('token');
        return tokenString ? JSON.parse(tokenString) : null;
    }

    const api: AxiosInstance = axios.create({
        baseURL: 'http://healthylab.io/api',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    // Specify the type of the "id" parameter as an optional string
    const getUser = async ({ id }: { id?: string } = {}): Promise<User> => {
        // Create a new FormData instance
        const formdata = new FormData();
        let response: AxiosResponse<User>;

        if (id) {
            // If an ID is provided, append it to the form data
            formdata.append('id', id);
            // Use "userDetail" endpoint for single user request
            response = await api.post('userDetail', formdata);
        } else {
            // Use "users" endpoint for multiple users request
            response = await api.post('users');
        }

        // Return the user data from the response
        return response.data;
    }

 
    const getMenu = async (): Promise<Menu | Error> => {
        try {
          const response: AxiosResponse<Menu> = await api.post('menu');
          return response.data;
        } catch (err:any) {
          return err;
        }
      }

    return { api, token, user, logout, saveToken, getToken, getUser,getMenu,setSessionToken,isSessionActive, destroySessionAndNavigateToLogin };
};



