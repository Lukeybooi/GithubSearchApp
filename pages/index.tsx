import React, { FC, useEffect } from 'react';
import MainLayout from '../src/components/global/layout';

const Home: FC = () => {
  useEffect(() => {}, []);

  return <MainLayout title='Home'>Hello</MainLayout>;
};

export default Home;
