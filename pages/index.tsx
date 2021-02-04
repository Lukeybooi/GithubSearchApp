import React, { FC } from 'react';
import { AVATAR_LINK } from '../src/app-constants';
import { CardBody, SearchAppBar } from '../src/components';
import MainLayout from '../src/components/global/layout';
import { useGithubContext } from '../src/provider';

const Home: FC = () => {
  const { userDetail = {}, username, searchUsername } = useGithubContext();

  const { login, name, bio, avatar_url } = userDetail;

  return (
    <MainLayout title='Home'>
      <SearchAppBar title={username} onChange={({ target: { value } }) => searchUsername(value)} />
      <CardBody
        title={login}
        subheader={name}
        bio={bio}
        initials={login?.charAt(0)}
        image={avatar_url || AVATAR_LINK}
      />
    </MainLayout>
  );
};

export default Home;
