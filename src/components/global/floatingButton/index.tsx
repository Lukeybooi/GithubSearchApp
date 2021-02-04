import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation';
import React, { FC } from 'react';

interface IProps {
  readonly title: string;
  readonly onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FloatingActionButton: FC<IProps> = ({ title, onClick }) => {
  const classes = useStyles();

  return (
    <Fab variant='extended' size='medium' color='primary' aria-label='add' className={classes.margin} onClick={onClick}>
      <NavigationIcon className={classes.extendedIcon} />
      {title}
    </Fab>
  );
};

export default FloatingActionButton;
