import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import React, { FC } from 'react';
import { AVATAR_LINK } from '../../../app-constants';
import { IGithub } from '../../../models';
import { useGithubContext } from '../../../provider';
import FloatingActionButton from '../floatingButton';
import { useStyles } from './util';

interface IProps extends IGithub {}

const CardBody: FC<IProps> = ({ login, name, bio, avatar_url, location, company, email, followers, following }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { getUserDetail } = useGithubContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={login}
        subheader={name}
      />
      <CardMedia className={classes.media} image={avatar_url || AVATAR_LINK} title={login} />

      <FloatingActionButton title='Search' onClick={onClickFloatingButton} />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {bio}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          {email && (
            <>
              <Typography paragraph>Email:</Typography>
              <Typography paragraph>{email}</Typography>
            </>
          )}

          {location && (
            <>
              <Typography paragraph>Location:</Typography>
              <Typography paragraph>{location}</Typography>
            </>
          )}

          {company && (
            <>
              <Typography paragraph>Company:</Typography>
              <Typography paragraph>{company}</Typography>
            </>
          )}

          {followers && (
            <>
              <Typography paragraph>Followers:</Typography>
              <Typography paragraph>{followers}</Typography>
            </>
          )}

          {following && (
            <>
              <Typography paragraph>Following:</Typography>
              <Typography paragraph>{following}</Typography>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardBody;
