import React, { useState, useNotify, useLogin } from "react";
import { TextField, Typography, Button, Box,Popover } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import axios from "axios";



const Login = () => {
  const navigate = useNavigate();
  const { updateToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  
   

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      try {
        // const response = await axios.post("your-login-endpoint", {
        //   email,
        //   password,
        // });
        // const token = response.data.token;
        const token =  "efnrgjtnhg";
        updateToken(token);
        // setToken( localStorage.setItem("token", token));
        navigate("/Appbar");
      } catch (error) {
        // Handle login error
        console.error("Login failed", error);
      }
    }
  };
   
  return (
    <React.Fragment>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          width: "385px",
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" color="secondary" margin={1}>
            LOGIN
          </Typography>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={email}
            error={emailError}
          />
          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Box textAlign="center">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ mb: 2 }}
            >
              Login
            </Button>  
          </Box>
        </form>
        <small>
          Need an account? <Link to="/">Register here</Link>
        </small>
      </Box>
    </React.Fragment>
  );
};

export default Login;
