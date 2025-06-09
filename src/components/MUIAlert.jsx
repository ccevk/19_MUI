import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

function MUIAlert() {
  return (
   
    <div style={{margin:'100px'}} >
         <Stack spacing={1} >
        <Alert sx={{width:'250px'}} severity="success" > 
        <AlertTitle>Success</AlertTitle>
        Silme islemi basarili</Alert>
        <Alert sx={{width:'250px'}} severity="error" variant="outlined"> Silme islemi maalesef olmadi hocam</Alert>
        <Alert sx={{width:'250px'}} severity="info" variant="filled" > Silme islemi icin tikla</Alert>
    </Stack>
    </div>
  )
}

export default MUIAlert