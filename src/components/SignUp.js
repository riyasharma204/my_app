import React, {useState} from 'react';
import { TextField,Typography, Button, Box } from '@mui/material';
import { Link } from "react-router-dom"
 
 
const SignUp = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        alert("Registered Successfully");
        console.log(Name, email, password) 
    }
 
    return (
        <React.Fragment>
        <Box
        sx={{
            boxShadow: 3,
            borderRadius: 2,
            width: '385px', 
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}> 
            <Typography variant="h4" align="center" color="secondary" margin={2}>REGISTER</Typography>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                 
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Name"
                        onChange={e => setName(e.target.value)}
                        value={Name}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                 <Box textAlign='center'> 
                <Button variant="contained" color="secondary" type="submit" sx={{mb:2}}>Register</Button>
                </Box>
            </form>
            <small>Already have an account? <Link to="/Login">Login Here</Link></small>
          </Box>
        </React.Fragment>
    )
}
 
export default SignUp;