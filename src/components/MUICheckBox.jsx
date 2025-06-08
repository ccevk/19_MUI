import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FormControlLabel } from '@mui/material';

const label = { inputProps: {'aria-label': 'Checkbox demo' } };

function MUICheckBox() {
  return (
   <div>
    <FormControlLabel
    control={<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
    
    label="fav"
    labelPlacement='bottom'
    />
    
    <Checkbox
    {...label}
    icon={<BookmarkBorderIcon />}
    checkedIcon={<BookmarkIcon />}
    />
   </div>
  );
}

export default MUICheckBox;
