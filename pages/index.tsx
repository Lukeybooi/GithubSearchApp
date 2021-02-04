import React, { FC } from 'react';
import { Alert, CardBody, SearchAppBar } from '../src/components';
import MainLayout from '../src/components/global/layout';
import { useGithubContext } from '../src/provider';

const Home: FC = () => {
  const { getUserDetail, userDetail = {}, searchUsername, loadingFlag, error } = useGithubContext();

  const { id } = userDetail;

  return (
    <MainLayout title='Home' isLoading={loadingFlag}>
      <SearchAppBar
        title={id?.toString()}
        onChange={({ target: { value } }) => searchUsername(value)}
        onKeyDown={getUserDetail}
      />

      {error && <Alert severity='error' title='Error' message={error} />}

      <CardBody {...userDetail} />
    </MainLayout>
  );
};

export default Home;
