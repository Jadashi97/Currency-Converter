import React, { useContext } from 'react';
import {Grid, InputAdornment, TextField} from "@mui/material";

function InputAmount() {
    const {firstAmount, setFirstAmount} = useContext();

    return (
      <Grid>
        <TextField
          value={firstAmount}
          onChange={e => setFirstAmount(e.target.value)}
          label='Amount'
          fullWidth
          InputProps={{
            type: "number",
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
      </Grid>
    )
}

export default InputAmount;
