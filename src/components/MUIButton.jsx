import React from 'react'
import { Button } from '@mui/material'
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';


function MUIButton() {
  return (
    <div>
       <div style={{marginBottom:'20px' }}> 
       <Button variant='text'>Kaydet</Button>
       <Button variant='contained'>Kaydet</Button>
       <Button variant='outlined'>Kaydet</Button>
       </div>

       <div style={{marginBottom:'20px'}} >
        <Button color='primary'>Giris</Button>
        <Button color='success' variant='contained'>Giris</Button>
       </div>

       <div style={{marginBottom:'20px'}} >
        <Button size='medium' variant='text' color='warning' >Geri Bak</Button>
        <Button size='small' variant='contained' color='warning' startIcon={<DoDisturbOffIcon/>} endIcon={<DoDisturbOffIcon/>} > Geri Bak</Button>
        
       </div>
    </div>
  )
}

export default MUIButton