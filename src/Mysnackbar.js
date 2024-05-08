import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Mysnackbar({open ,message}) {


  const handleClick = () => {

  };



  const action = (
    <React.Fragment>
   
     
    </React.Fragment>
  );

  return (
    <div style={{backgroundColor:'green'}} >
   
      <Snackbar 
        open={open}
        autoHideDuration={6000}

        message={message}
        action={action}
      />
    </div>
  );
}
