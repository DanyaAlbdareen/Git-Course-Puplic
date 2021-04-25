import React, { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

export default function LoadingBackdrop({ isLoading }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setOpen(true);
    } else if (!isLoading) {
      setOpen(false);
    } else {
      setOpen(false);
    }
  }, [isLoading]);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
