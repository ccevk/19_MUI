import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {
    
    const [expanded, setExpanded] = React.useState('' | false)
    
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    }

  return (
    <div>
      <Accordion expanded={ expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{width: '33%', flexShrink: 0}}>
            General Setting
          </Typography>
          {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
            Ben 1. akordiyonum
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            bu 1. akordiyondur burada detaaylari yer alir.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={ expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{width: '33%', flexShrink: 0}}>
            Users
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Ben 2. akordiyonum
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            bu 2. akordiyondur burada detaaylari yer alir.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={ expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{width: '33%', flexShrink: 0}}>
            General Setting
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Ben 3. akordiyonum
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            bu 3. akordiyondur burada detaaylari yer alir.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MUIAccordion