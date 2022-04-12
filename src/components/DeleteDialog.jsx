import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const DeleteDialog = ({ openDialog, setOpenDialog, deleteItem }) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item? This can not be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deleteItem} variant="contained" color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
