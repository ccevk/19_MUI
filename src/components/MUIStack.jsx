import React from 'react'
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

function MUIStack() {
  return (
    <div>
        <Stack direction={{xs:'column',sm:'row'}} spacing={10} 
        divider={<Divider orientation='vertical' flexItem />}
        >
            <div> item 1 </div>
            <div> item 2 </div>
            <div> item 3 </div>
        </Stack>
    </div>
  )
}

export default MUIStack