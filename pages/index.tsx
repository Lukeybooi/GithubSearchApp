import React, { FC } from 'react';
import { CardBody, SearchAppBar } from '../src/components';
import AlertComponent from '../src/components/global/alert';
import MainLayout from '../src/components/global/layout';
import { useGithubContext } from '../src/provider';

const Home: FC = () => {
  const { userDetail = {}, searchUsername, error } = useGithubContext();

  const { id } = userDetail;

  return (
    <MainLayout title='Home'>
      <SearchAppBar title={id?.toString()} onChange={({ target: { value } }) => searchUsername(value)} />

      {error && <AlertComponent severity='error' title='Error' message={error} />}

      <CardBody {...userDetail} />
    </MainLayout>
  );
};

export default Home;
