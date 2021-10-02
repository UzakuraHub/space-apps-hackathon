import React from 'react';
import { TextField, Button, Box, Container } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';

const Login = () => {
  return (
    <div className='mt-10'>
      <Container maxWidth='sm'>
        <Box
          sx={{
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold'
          }}
        >
          LOGIN
        </Box>
        <div>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            type='email'
            fullWidth
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            label='Password'
            variant='outlined'
            type='password'
            margin='normal'
            fullWidth
          />
        </div>
        <div>
          <Button
            variant='contained'
            startIcon={<LoginIcon />}
            fullWidth
            size='large'
          >
            LOGIN
          </Button>
        </div>
        <Box sx={{ textAlign: 'center' }} margin='normal'>
          Or
        </Box>
        <div>
          <Button variant='outlined' fullWidth size='large'>
            REGISTER
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
