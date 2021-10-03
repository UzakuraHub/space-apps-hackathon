import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevInfo = {
      name,
      email,
      password,
    };
    localStorage.setItem('RegInfo', JSON.stringify(prevInfo));
    history.push('/profileSetup');
  };

  return (
    <div className='mt-10'>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin='normal'
            fullWidth
            required
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            label='Email'
            margin='normal'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            label='Password'
            variant='outlined'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
            required
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
            type='submit'
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
            <Button type='button' variant='outlined' fullWidth size='large'>
              LOGIN
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
