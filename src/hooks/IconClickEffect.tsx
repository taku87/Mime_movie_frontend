import { makeStyles } from "@material-ui/core/styles";

type IconProps = {
  children: JSX.Element
};

const useStyles = makeStyles({
  circle: {
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    transition: "0.3s",

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