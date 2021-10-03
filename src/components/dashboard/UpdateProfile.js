import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Profile from '../../assets/profile.jpg';

// import BackIcon from '../../assets/backIcon.svg';

const UpdateProfile = () => {
  return (
    <div className='mt-3'>
      <Container maxWidth='sm'>
        <Link to='/settings'>
          {/* <BackIcon /> */}
          <span>Back</span>
        </Link>
        <div style={{ width: '40%', margin: 'auto' }}>
          <Box
            sx={{
              textAlign: 'left',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '24px'
            }}
          >
            Update Profile
          </Box>
          <img
            src={Profile}
            alt='proffile'
            style={{ height: '150px', width: '150px', borderRadius: '200px' }}
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            label='Full Name'
            variant='outlined'
            type='text'
            margin='normal'
            fullWidth
          />
        </div>
        <FormControl variant='outlined' fullWidth disabled>
          <InputLabel htmlFor='outlined-adornment-password'>
            Kiali, Rwanda
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            endAdornment={
              <InputAdornment position='end'>
                <Search />
              </InputAdornment>
            }
            label='Location'
          />
          <Box
            sx={{
              textAlign: 'left',
              fontSize: '12px',
              marginBottom: '20px'
            }}
          >
            Create a new trip to change location
          </Box>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Prefered Language
          </InputLabel>
          <Select labelId='demo-simple-select-label' id='demo-simple-select'>
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'French'}>French</MenuItem>
            <MenuItem value={'Swahili'}>Swahili</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant='contained'
          fullWidth
          size='large'
          style={{
            backgroundColor: '#6200EE',
            color: '#FFFFFF',
            marginTop: '34px'
          }}
        >
          Finish
        </Button>
      </Container>
    </div>
  );
};

export default UpdateProfile;
