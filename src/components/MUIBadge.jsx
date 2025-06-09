import React from 'react'
import Badge from '@mui/material/Badge';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function MUIBadge() {
  return (
    <Badge style={{marginLeft:'100px', marginTop:'100px'}}
    badgeContent={5} color="primary" max={4} 
    anchorOrigin={{ vertical: 'top', horizontal:'right' }} >
        <LocalGroceryStoreIcon />
    </Badge>
  )
}

export default MUIBadge