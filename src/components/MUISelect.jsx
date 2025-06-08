import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

function MUISelect() {
    const [ currencies, setCurrencies ] = useState([]);
   
    console.log(currencies)
  return (
  <div>
    {/* <FormControl sx={{width:'200px'}} >
        <InputLabel>Para Birimi</InputLabel>
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)} size='small'>
            <MenuItem value="TRY" >Turk Lirasi</MenuItem>
            <MenuItem value="EUR" >Euro</MenuItem>
            <MenuItem value="USD" >Dolar</MenuItem>
        </Select>
    </FormControl> */}

    <TextField  SelectProps={{ multiple:true }}
    select sx={{width:'250px'}} label="Para Birimi" 
    value={currencies} onChange={(e) => setCurrencies(e.target.value)} >
        <MenuItem value="TRY" >Turk Lirasi</MenuItem>
        <MenuItem value="EUR" >Euro</MenuItem>
        <MenuItem value="USD" >Dolar</MenuItem>
    </TextField>
  </div>
  )
}

export default MUISelect