import React from 'react'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel (props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex '}}>
            <CircularProgress variant="determinate" {...props} />
            <Box sx={{ top: 0, 
                        left:0, bottom: 0, right: 0, position: 'absolute', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <Typography variant="caption" component="div" sx={{color: 'text.secondary'}} >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.PropTypes = {
    value:PropTypes.number.isRequired,
};

function MUIProgress() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />
}

export default MUIProgress