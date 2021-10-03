import React from 'react';
import { TextField, Button, Box, Container } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

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
            style={{ backgroundColor: '#6200EE', color: '#FFFFFF' }}
          >
            LOGIN
          </Button>
        </div>
        <Box sx={{ textAlign: 'center' }} margin='normal'>
          Or
        </Box>
        <div>
          <Link to='/register'>
            <Button variant='outlined' fullWidth size='large'>
              REGISTER
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
