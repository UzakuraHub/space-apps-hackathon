import { Container } from '@material-ui/core';
import BottomNav from '../shared/BottomNav';
import Header from '../shared/Header';

const Warnings = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <Header />
        Warnings
        <BottomNav />
      </Container>
    </div>
  );
};

export default Warnings;
