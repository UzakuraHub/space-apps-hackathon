/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import SelectCountry from '../../components/SelectCountry';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import Profile from '../../assets/profile.jpg';

const ProfileSetup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    language: '',
  });
  const [selected, setSelected] = useState('');
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleImage = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  React.useEffect(() => {
    const prevInfo = JSON.parse(localStorage.getItem('RegInfo'));
    setUser({ ...user, ...prevInfo });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const body = {
      ...user,
      location: selected.name,
      image: image.raw,
    };
    console.log(body);
  };

  return (
    <div className='mt-3'>
      <form onSubmit={handleRegister}>
        <div style={{ width: '40%', margin: 'auto' }}>
          <Box
            sx={{
              textAlign: 'left',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '24px',
            }}
          >
            Profile Setup
          </Box>
          <img
            src={image.preview ? image.preview : Profile}
            alt='proffile'
            style={{ height: '150px', width: '150px', borderRadius: '200px' }}
          />
          <input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
            required
            onChange={handleImage}
          />
        </div>
        <div>
          <TextField
            id='outlined-basic'
            label='Full Name'
            variant='outlined'
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type='text'
            required
            margin='normal'
            fullWidth
          />
        </div>
        <SelectCountry setSelected={setSelected} selected={selected} />
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Prefered Language
          </InputLabel>
          <Select
            required
            onChange={(e) => setUser({ ...user, language: e.target.value })}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
          >
            <MenuItem value={'en_us'}>English</MenuItem>
            <MenuItem value={'fr_FR'}>French</MenuItem>
            <MenuItem value={'swa_KE'}>Swahili</MenuItem>
            <MenuItem value={'kinya_RWA'}>Kinyarwanda</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant='contained'
          fullWidth
          size='large'
          type='submit'
          style={{
            backgroundColor: '#6200EE',
            color: '#FFFFFF',
            marginTop: '34px',
          }}
        >
          Finish
        </Button>
      </form>
    </div>
  );
};

export default ProfileSetup;
