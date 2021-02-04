import Head from 'next/head';
import React, { FC } from 'react';

interface IProps {
  readonly className?: string;
  readonly title: string;
}

const MainLayout: FC<IProps> = ({ children, className, title }) => {
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
