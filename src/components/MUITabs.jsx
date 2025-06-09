import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel';


function MUITabs() {

const [ value, setValue] = useState(0);

const handleChange = (event, newValue) => {
 setValue(newValue);
}

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Kisisel Bilgiler" />
        <Tab label="Egitim Bilgisi" />
        <Tab label="Iletisim" />
      </Tabs>
    </Box>

    <CustomTabPanel value={value} index={0}>
      Ahmet Arif
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      Dunya Universites
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      dunya@dunya.com
    </CustomTabPanel>
  </Box>
  )
}

export default MUITabs