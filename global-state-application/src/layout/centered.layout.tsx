import * as React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    padding: '2rem',
    overflow: 'auto'
  }
});

export const CenteredLayout : React.FC = (props) => {
  const classes = useStyles({});

  return (
    <div className={classes.layout}>
      {props.children}
    </div>
  )
}
