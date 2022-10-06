import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  circle: {
    margin: "auto",
    borderRadius: "50%",
    width: "75px",
    height: "75px",

    "&:hover": {
      background: "yellow"
    },
    "&:active": {
      background: "aqua"
    }
  }
});

export const IconClickEffect = (props :any) => {
  const classes = useStyles();
  return (
    <div className={classes.circle}>{props.children}</div>
  )
}

export default IconClickEffect;