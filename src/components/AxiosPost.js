import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Snackbar, Alert } from '@mui/material';

function AxiosPost() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        PhoneNo: ''
    });

    const[error,setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.Name || !formData.Email || !formData.PhoneNo) {
            setError('Please fill in all fields');
            setOpenSnackbar(true);
            return;
        }

        // Check if PhoneNo is not a number
        if (isNaN(formData.PhoneNo)) {
            setError('Phone Number must be a number');
            setOpenSnackbar(true);
            return;
        }

        axios.post('https://60fe-115-246-97-211.ngrok-free.app/testSave', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                setError(error.response.data.message); 
                setOpenSnackbar(true);
            });

    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 6 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Phone Number"
                    name="PhoneNo"
                    value={formData.PhoneNo}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Submit
                </Button>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert severity="error" onClose={handleCloseSnackbar}>
                     {error}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default AxiosPost;
