import { Container } from '@material-ui/core';
import Head from 'next/head';
import React, { FC } from 'react';
import { Backdrop } from '../..';

interface IProps {
  readonly className?: string;
  readonly title: string;
  readonly isLoading?: boolean;
}

const MainLayout: FC<IProps> = ({ children, className, title, isLoading }) => {
  return (
    <div className={className}>
      <Container maxWidth='sm'>
        <Head>
          <title>{title}</title>
        </Head>
        <main>{children}</main>
      </Container>
      <Backdrop open={isLoading} />
    </div>
  );
};

export default MainLayout;
