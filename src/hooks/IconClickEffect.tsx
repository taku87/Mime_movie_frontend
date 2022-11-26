import { makeStyles } from "@material-ui/core/styles";

type IconProps = {
  children: JSX.Element
};

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
      background: "orange"
    }
  }
});

export const IconClickEffect = (props :IconProps) => {
  const classes = useStyles();
  return (
    <div className={classes.circle}>{props.children}</div>
  )
}

export default IconClickEffect;