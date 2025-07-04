import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SUV from '../images/SUV.jpeg';

function MUICard() {
  return (
    <Card sx= {{maxWidth: 345 }} >
        <CardMedia
            sx={{ height: "150px"}}
            image={SUV}
            title="SUV Araba"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            SUV Arac
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            SUV araclar yerden yuksek ve performanslari de gayet iyidir. 
            Ayrica 5 kapili olmasindan dolayi aileler icin cok tercih edilir.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Paylas</Button>
            <Button size="small">Daha fazlasi icin!</Button>
        </CardActions>
    </Card>
  )
}

export default MUICard