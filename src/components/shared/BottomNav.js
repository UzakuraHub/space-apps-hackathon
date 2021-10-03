import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DashboardIcon from '../../assets/dashboard.svg';
import SettingsIcon from '../../assets/settings.svg';
import WarningIcon from '../../assets/warning.svg';

const BottomNav = () => {
  return (
    <div
      className='flex'
      style={{
        height: '60px',
        background: 'white',
        bottom: 0,
        left: 0,
        width: '100vw',
        position: 'fixed',
        padding: '1rem',
        textAlign: 'center',
      }}
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
  );
};

export default BottomNav;
