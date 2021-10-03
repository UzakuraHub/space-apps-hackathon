import React, { useState } from 'react';
import SelectCountry from '../../components/SelectCountry';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import Profile from '../../assets/profile.jpg';

const ProfileSetup = () => {
  const [selected, setSelected] = useState('');
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleImage = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  return (
    <div className='mt-3'>
      <Container maxWidth='sm'>
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
            onChange={handleImage}
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
        <SelectCountry setSelected={setSelected} selected={selected} />
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
            marginTop: '34px',
          }}
        >
          Finish
        </Button>
      </Container>
    </div>
  );
};

export default ProfileSetup;
