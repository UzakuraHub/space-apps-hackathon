import { Box, Button } from '@material-ui/core';
import Profile from '../../assets/profile.jpg';

const Header = ({ name, location }) => {
  return (
    <div className='flex mt-3'>
      <div className='flex ' style={{ width: '100%' }}>
        <div style={{ width: '40%' }}>
          <img
            src={Profile}
            alt='proffile'
            style={{ height: '50px', width: '50px', borderRadius: '200px' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Box
            sx={{
              textAlign: 'left',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Hi, {name.split(' ')[0] || ''}!
          </Box>
          <Box
            sx={{
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: 'semibold',
            }}
          >
            Location: <span style={{ fontWeight: 'bold' }}>{location || ''}</span>
          </Box>
        </div>
      </div>
      <Button
        variant='contained'
        fullWidth
        size='large'
        style={{
          backgroundColor: '#6200EE',
          color: '#FFFFFF',
          width: '55%',
          marginLeft: '14px',
        }}
      >
        + NEW TRIP
      </Button>
    </div>
  );
};

export default Header;
