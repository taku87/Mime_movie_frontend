import moment from "moment";
import "moment/locale/ja";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import type { Comment,Comments } from "src/types/contentvideo"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      display: "inline"
    },
    margin: {
      margin: theme.spacing(1, 1, 0, 2),
    },
  })
);

export const CommentList = (props :Comments) => {
  const classes = useStyles();
  const { comments } = props;

  return (
    <div>
      {comments?.map((comment :Comment) => (
        <>
        <ListItem alignItems="flex-start" key={comment.id}>
          <ListItemText
            primary={
              <>
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
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" />
        </>
      ))}
    </div>
  )
};

export default CommentList;