import { useAuth0 } from "@auth0/auth0-react";

import moment from "moment";
import "moment/locale/ja";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Avatar, ListItemAvatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      display: "inline",
    },
    margin: {
      margin: theme.spacing(1, 1, 0, 2),
    },
  })
);

type Props = {
  comments?: any;
};

export const CommentList = (props :Props) => {
  const classes = useStyles();
  const { comments } = props;
  const { user } = useAuth0();

  return (
    <div>
      {comments.map((comment :any) => (
        <>
        <ListItem alignItems="flex-start" key={comment.id}>
          {/* <ListItemAvatar>
              <img src={user.picture} alt={user.name} className="avatar"/>
          </ListItemAvatar> */}
          <ListItemText
            primary={
              <>
                {/* <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {user.name}
                </Typography> */}
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {moment(comment.created_at).fromNow()}
                </Typography>
              </>
            }
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {comment.body}
                </Typography>
                <br />
                MIME MOVIE
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
      ))}
    </div>
  )
};

export default CommentList;