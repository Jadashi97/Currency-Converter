import { Autocomplete, Grid, TextField } from '@mui/material';
import useAxios from '../hooks/useAxios';


const SelectCountry = (props) => {
  const {value, setValue, label} = props;
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

  return (
    <Grid item xs={12} md={12}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // options={dataCountries}
        renderInput={(params)=> <TextField {...params} label={label}/>}
      />
    </Grid>
  )
}

export default SelectCountry;
