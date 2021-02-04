import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { GitHub } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { MetaCard } from '../../..';
import { AVATAR_LINK } from '../../../../app-constants';
import { IGithub } from '../../../../models';
import { useGithubContext } from '../../../../provider';
import FloatingActionButton from '../../../global/floatingButton';
import { useStyles } from './util';

interface IProps extends IGithub {}

const CardBody: FC<IProps> = ({ login, name, bio, avatar_url, location, company, email, followers, following }) => {
  const classes = useStyles();

  const [state, setState] = useState({ expanded: false });

  const router = useRouter();

  const { getUserDetail, userDetail: { id, html_url } = {}, username } = useGithubContext();

  useEffect(() => {
    if (!id && state.expanded) {
      setState({ ...state, expanded: false });
    }
  }, [id]);

  const handleExpandClick = () => {
    setState({ ...state, expanded: !state.expanded });
  };

  const onClickFloatingButton = () => {
    getUserDetail();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {login?.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={login}
        subheader={name}
      />

      <CardMedia
        className={classes.media}
        image={avatar_url || AVATAR_LINK}
        title={login}
        style={{ width: 552, height: 310 }}
      />

      <FloatingActionButton title='Search' onClick={onClickFloatingButton} disabled={!username} />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {bio}
        </Typography>
      </CardContent>

      {id && (
        <CardActions disableSpacing>
          <IconButton aria-label='go to Github' onClick={() => router.push(html_url)}>
            <GitHub />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: state.expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={state.expanded}
            aria-label='show more'>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      )}

      <Collapse in={state.expanded} timeout='auto' unmountOnExit>
        <CardContent>
          {email && <MetaCard title='Email' item={email} />}

          {location && <MetaCard title='Location' item={location} />}

          {company && <MetaCard title='Company' item={company} />}

          <MetaCard title='Followers' item={followers} />

          <MetaCard title='Following' item={following} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardBody;
