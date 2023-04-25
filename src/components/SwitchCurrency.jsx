import React from 'react';
import {Button, Grid,TextField} from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const SwitchCurrency = () => {
  return (
    <Grid>
      <Button>
        <CompareArrowsIcon sx={{fontSize: 30}}/>
      </Button>
    </Grid>
  )
}

export default SwitchCurrency;
