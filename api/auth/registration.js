import React, { useState } from 'react';
import { userInfo } from 'os';
import axios from 'axios';

const Registration = () => {
    const [user, setUser] = useState({ 
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });
    
    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log('Checking user state:',user);
    };
    
    const submitHandler = e => {
        e.preventDefault();
        axios.post()
        .then(res => {
            console.log('Server response:', res);
            setUser({
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            });
         })
         .catch(err => {
             console.log(err)
         });
     };
    
    return (
        <React.Fragment>
            <form>
                <input 
                type="text"
                name="first_name"
                value={user.first_name}
                placeholder="first name"
                onClick={changeHandler} 
                />

                <input 
                type="text"
                name="last_name"
                value={user.last_name}
                placeholder="last name"
                onClick={changeHandler} 
                />

                <input 
                type="text"
                name="email"
                value={user.email}
                placeholder="email"
                onClick={changeHandler} 
                />
                
                <input 
                type="text"
                name="password"
                value={user.password}
                placeholder="password"
                onClick={changeHandler} 
                />
            </form>
        </React.Fragment>
    );
};

export default Registration;