import { Container } from '@material-ui/core';
import BottomNav from '../shared/BottomNav';
import Header from '../shared/Header';

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <Header />
        <BottomNav />
      </Container>
    </div>
  );
};

export default Dashboard;
