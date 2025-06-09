import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

  return (
    <React.Fragment>
        <Button onClick={handleClickOpen}>
            Open alert dialog </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Alert Content</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lorem ipsum data falan falan...
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} >Disagree</Button>
                <Button onClick={handleClose} autoFocus >Agree</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
  )
}

export default MUIDialog