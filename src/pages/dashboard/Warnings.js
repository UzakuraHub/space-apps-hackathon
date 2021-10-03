import { useState } from 'react';
import BottomNav from '../../components/shared/BottomNav';
import Header from '../../components/shared/Header';
import List from '../../components/List';

const Warnings = () => {
  const [loading] = useState(false);
  const [name] = useState('Jane');
  const [location] = useState('Rwanda');

  const recent = [
    { name: 'Incident 1', value: 3 },
    { name: 'Incident 2', value: 3 },
    { name: 'Incident 3', value: 3 },
    { name: 'Incident 4', value: 3 },
  ];

  const severe = [
    { name: 'Incident 1', value: 300 },
    { name: 'Incident 2', value: 300 },
    { name: 'Incident 3', value: 300 },
    { name: 'Incident 4', value: 300 },
  ];

  return (
    <div>
      <Header name={name} location={location} />
      <section className='section'>
        <List name='recent' data={recent} loading={loading} />
      </section>
      <section className='section'>
        <List name='severe' data={severe} loading={loading} />
      </section>
      <BottomNav />
    </div>
  );
};

export default Warnings;
