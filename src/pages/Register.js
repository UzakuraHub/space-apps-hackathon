import React from 'react';
import { TextField, Button, Box, Container } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const Register = () => {
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
          REGISTER
        </Box>
        <div>
          <TextField
            id='outlined-basic'
            label='Full name'
            variant='outlined'
            type='text'
            margin='normal'
            fullWidth
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            label='Email'
            margin='normal'
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
            margin='normal'
            size='large'
            style={{ backgroundColor: '#6200EE', color: '#FFFFFF' }}
          >
            REGISTER
          </Button>
        </div>
        <Box sx={{ textAlign: 'center' }} margin='normal'>
          Or
        </Box>
        <div>
          <Link to='/login'>
            <Button variant='outlined' fullWidth size='large'>
              LOGIN
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;
