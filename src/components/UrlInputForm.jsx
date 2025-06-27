import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { isValidUrl, isValidShortcode } from '../utils/validators';
import { logEvent } from '../utils/logger';

const UrlInputForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState([{ url: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const copy = [...inputs];
    copy[index][field] = value;
    setInputs(copy);
  };

  const handleAdd = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { url: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = () => {
    const valid = inputs.filter(({ url, validity, shortcode }) => {
      const ok = isValidUrl(url) && (!validity || !isNaN(validity)) && (!shortcode || isValidShortcode(shortcode));
      if (!ok) logEvent("Validation Failed", JSON.stringify({ url, validity, shortcode }));
      return ok;
    });
    onSubmit(valid);
  };

  return (
    <Box>
      {inputs.map((input, idx) => (
        <Grid container spacing={2} key={idx} sx={{ mb: 2 }}>
          <Grid item xs={5}>
            <TextField fullWidth label="Original URL" value={input.url}
              onChange={(e) => handleChange(idx, 'url', e.target.value)} />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Validity (minutes)" value={input.validity}
              onChange={(e) => handleChange(idx, 'validity', e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Custom Shortcode" value={input.shortcode}
              onChange={(e) => handleChange(idx, 'shortcode', e.target.value)} />
          </Grid>
        </Grid>
      ))}
      <Button variant="outlined" onClick={handleAdd}>Add URL</Button>
      <Button variant="contained" onClick={handleSubmit} sx={{ ml: 2 }}>Shorten</Button>
    </Box>
  );
};

export default UrlInputForm;
