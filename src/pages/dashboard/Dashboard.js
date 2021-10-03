import { useState } from 'react';
import BottomNav from '../../components/shared/BottomNav';
import Header from '../../components/shared/Header';
import List from '../../components/List';
import '../../styles/DashboardPage.css';

const Dashboard = () => {
  const [loading] = useState(false);
  const [name] = useState('Jane');
  const [location] = useState('Rwanda');

  const insights = [
    { name: 'Today Deaths', value: 827 },
    { name: 'Today Cases', value: 827 },
    { name: 'Today Recoveries', value: 827 },
  ];
  const tips = [
    { name: 'Today Deaths', value: 827 },
    { name: 'Today Cases', value: 827 },
    { name: 'Today Recoveries', value: 827 },
  ];
  // const backgrounds = []

  return (
    <>
      <Header name={name} location={location} />
      <section className='section'>
        <List name='insights' data={insights} loading={loading} horizontal />
      </section>
      <section className='section'>
        <List name='tips' data={tips} loading={loading} />
      </section>
      <BottomNav />
    </>
  );
};

export default Dashboard;
