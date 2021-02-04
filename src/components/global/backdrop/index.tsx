import { Backdrop, CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from './utls';

interface IProps {
  readonly open: boolean;
}

const BackdropComponent: FC<IProps> = ({ open }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default BackdropComponent;
