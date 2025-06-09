import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUITooltip() {
  return (
    <div style={{marginTop:'50px', marginLeft:'50px'}}>
        <Tooltip title="Silme">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default MUITooltip