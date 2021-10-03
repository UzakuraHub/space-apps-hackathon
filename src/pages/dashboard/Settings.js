import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../../components/shared/BottomNav';
import Header from '../../components/shared/Header';

const Settings = () => {
  const [name] = useState('Jane');
  const [location] = useState('Rwanda');
  return (
    <div>
      <Header name={name} location={location} />
      <Box
        sx={{
          textAlign: 'left',
          fontSize: '16px',
          marginTop: '40px',
        }}
      >
        Basic:
      </Box>
      <Link to='/updateProfile'>
        <Button
          variant='contained'
          disableElevation
          fullWidth
          size='large'
          style={{
            backgroundColor: '#ffff',
            color: '#333333',
            marginBottom: '20px',
            marginTop: '10px',
          }}
        >
          Update profile
        </Button>
      </Link>
      <Box
        sx={{
          textAlign: 'left',
          fontSize: '16px',
          marginTop: '40px',
        }}
      >
        Advanced:
      </Box>
      <Button
        variant='contained'
        disableElevation
        fullWidth
        size='large'
        style={{
          backgroundColor: '#ffff',
          color: '#333333',
          marginBottom: '20px',
          marginTop: '10px',
        }}
      >
        Severe warnings
      </Button>
      <Button
        variant='contained'
        disableElevation
        fullWidth
        size='large'
        style={{
          backgroundColor: '#ffff',
          color: '#333333',
          marginBottom: '20px',
          marginTop: '10px',
        }}
      >
        Disable Email warnings
      </Button>
      <Box
        sx={{
          textAlign: 'left',
          fontSize: '16px',
          color: 'red',
          marginTop: '40px',
        }}
      >
        Danger Zone:
      </Box>
      <Button
        variant='contained'
        disableElevation
        fullWidth
        size='large'
        style={{
          backgroundColor: '#ffff',
          color: '#333333',
          marginBottom: '20px',
          marginTop: '10px',
        }}
      >
        Disactivate Account
      </Button>
      <Button
        variant='outlined'
        disableElevation
        fullWidth
        size='large'
        style={{
          // backgroundColor: 'red',
          color: '#333',
          marginBottom: '20px',
          marginTop: '10px',
        }}
      >
        Delete Account
      </Button>
      <BottomNav />
    </div>
  );
};

export default Settings;
