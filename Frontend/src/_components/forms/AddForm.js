import * as React from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddForm() {
    const [formValues, setFormValues] = React.useState({
        IntergerOne: null,
        IntergerTwo: null
    });
    const [response, setResponse] = React.useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Click", formValues)
        try {
            const res = await axios.post('https://localhost:7065/add', formValues)
            console.log(res.data);
            setResponse(res.data);
          } catch (e) {
            alert(e)
          }
    };

    const handleChange = (e, name) => {
        console.log({ name, value: e.target.value })
        setFormValues({
            ...formValues,
            [name]: e.target.value
        })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h5">
                Add Form
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                type='number'
                required
                fullWidth
                label="Interger One"
                onChange={(e) => handleChange(e, 'IntergerOne')}
                />
                <TextField
                type='number'
                margin="normal"
                required
                fullWidth
                onChange={(e) => handleChange(e, 'IntergerTwo')}
                label="Interger Two"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Submit
                </Button>
                <Grid container>
                </Grid>
            </Box>

            {response && <Box> Response Sum: {response}</Box> }    

            </Box>
        </Container>
        </ThemeProvider>
    ); 
}