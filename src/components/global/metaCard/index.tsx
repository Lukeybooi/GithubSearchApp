import { makeStyles, Typography } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

interface IProps {
  readonly title: string;
  readonly item: string | ReactNode;
}

export const useStyles = makeStyles(() => ({
  padding: {
    padding: '12px 0',
  },
}));

const MetaCard: FC<IProps> = ({ title, item }) => {
  const classes = useStyles();

  return (
    <div className={classes.padding}>
      <Typography paragraph>{title}:</Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {item}
      </Typography>
    </div>
  );
};

export default MetaCard;
