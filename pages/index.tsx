import React, { FC } from 'react';
import { AVATAR_LINK } from '../src/app-constants';
import { CardBody, SearchAppBar } from '../src/components';
import AlertComponent from '../src/components/global/alert';
import MainLayout from '../src/components/global/layout';
import { useGithubContext } from '../src/provider';

const Home: FC = () => {
  const { userDetail = {}, searchUsername, error } = useGithubContext();

  const { id, login, name, bio, avatar_url } = userDetail;

  return (
    <MainLayout title='Home'>
      <SearchAppBar title={id?.toString()} onChange={({ target: { value } }) => searchUsername(value)} />

      {error && <AlertComponent severity='error' title='Error' message={error} />}

      <CardBody
        title={login}
        subheader={name}
        bio={bio}
        initials={login?.charAt(0).toUpperCase()}
        image={avatar_url || AVATAR_LINK}
      />
    </MainLayout>
  );
};

export default Home;
