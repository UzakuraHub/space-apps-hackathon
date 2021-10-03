import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DashboardIcon from '../../assets/dashboard.svg';
import SettingsIcon from '../../assets/settings.svg';
import WarningIcon from '../../assets/warning.svg';

const BottomNav = () => {
  return (
    <Container maxWidth='sm'>
      <div
        className='flex fixed'
        style={{ height: '60px', background: 'white' }}
      >
        <Link to='/dashboard'>
          <img src={DashboardIcon} alt='' />
          <Typography>Dashboard</Typography>
        </Link>
        <Link to='/warnings'>
          <img src={WarningIcon} alt='' />
          <Typography>Warnings</Typography>
        </Link>
        <Link to='/settings' className='mr-1'>
          <img src={SettingsIcon} alt='' />
          <Typography>Settings </Typography>
        </Link>
      </div>
    </Container>
  );
};

export default BottomNav;
