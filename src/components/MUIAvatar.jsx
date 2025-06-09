import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Currency from '../images/Currency.jpg'

function MUIAvatar() {
  return (
    <Stack direction="row" style={{marginTop:'100px', marginLeft:'100px'}}
    spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }} >N</Avatar>
        <Avatar alt="Currency" src={Currency} />
    </Stack>
  )
}

export default MUIAvatar