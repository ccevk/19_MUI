import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';




function MUITextFilled() {
  return (

    <div>
      <div style={{marginBottom:'20px'}}>
          <TextField label="isim" variant='filled' />
          <TextField label="isim" variant='outlined' color='warning' helperText="ismini gir" />
          <TextField label="345444" variant='standard' disabled/>
      </div>

      <div style={{marginBottom:'20px'}}>
        <TextField slotProps={{
          input: {
            startAdornment : <InputAdornment position='start' ><InterpreterModeIcon/></InputAdornment>
          }
           }} variant='filled' />
      </div>

      
      
    </div>
  )
}

export default MUITextFilled