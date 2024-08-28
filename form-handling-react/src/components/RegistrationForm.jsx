import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault ();

        // Basic validation

        if (!username) {
            setError('Username is required');
            return; 
        }
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        } 

        setErrors('')

        // Handle form submission logic here (e.g., send data to an API)
         
        console.log('Form submitted:' , { username, email, password });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p style={{color: 'red'}}>{error}</p> }

            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit'>Register</button>
        </Form>  
        );
    };

    export default RegistrationForm;