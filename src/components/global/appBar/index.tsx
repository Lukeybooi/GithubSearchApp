import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Menu, Search } from '@material-ui/icons';
import React, { FC } from 'react';
import { useStyles } from './utl';

interface IProps {
  readonly title: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onKeyDown?: () => void;
}

const SearchAppBar: FC<IProps> = ({ title, onChange, onKeyDown }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='open drawer'>
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            {title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onKeyDown();
                }
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
