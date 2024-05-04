import * as React from 'react';
import './App.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Togglegroup() {




  return (
    <ToggleButtonGroup
  style={{marginBottom:'20px', marginTop:'5px'}}
      exclusive

      aria-label="text alignment"
    >
      <ToggleButton  className='toggle'   value="left" aria-label="left aligned">
   Done
      </ToggleButton>
      <ToggleButton className='toggle'value="center" aria-label="centered">
    Edit
      </ToggleButton>
      <ToggleButton className='toggle' value="right" aria-label="right aligned">

All
      </ToggleButton>

    </ToggleButtonGroup>
  );
}
