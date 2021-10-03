import { Box, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BottomNav from '../shared/BottomNav';
import Header from '../shared/Header';

const Settings = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <Header />
        <Box
          sx={{
            textAlign: 'left',
            fontSize: '16px'
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
              marginTop: '10px'
            }}
          >
            Update profile
          </Button>
        </Link>
        <BottomNav />
        <Box
          sx={{
            textAlign: 'left',
            fontSize: '16px'
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
            marginTop: '10px'
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
            marginTop: '10px'
          }}
        >
          Disable Email warnings
        </Button>
        <Box
          sx={{
            textAlign: 'left',
            fontSize: '16px',
            color: 'red'
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
            marginTop: '10px'
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
            marginTop: '10px'
          }}
        >
          Delete Account
        </Button>
        <BottomNav />
      </Container>
    </div>
  );
};

export default Settings;
