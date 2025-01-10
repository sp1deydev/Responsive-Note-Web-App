import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { default as React } from "react";

function SnackBarNotification(props) {
    const {open, variant, message, time, vertical, horizontal, type, onFinish} = props;
    const handleClose = () => {
        onFinish();
    };
  return (
    <Snackbar
      open={open}
      autoHideDuration={time ?? 2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: vertical ?? "top", horizontal: horizontal ?? "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={type ?? "success"}
        variant={variant ?? "filled"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBarNotification;
