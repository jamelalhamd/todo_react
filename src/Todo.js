import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
export default function Todo() {
  return (
    <Card sx={{ backgroundColor:'#283593' ,color:'white ', minWidth:275 }}>
      <CardContent>



        <Grid container spacing={2}     >
        <Grid item xs={4} display="flex" justifyContent="space-around" alignItems="center" >
      
       <IconButton aria-label="delete" style={{color:'#8bc34a' ,backgroundColor:'white',border:'solid #8bc34a 3px'}}>
       <DeleteIcon />
      </IconButton>

      <IconButton aria-label="delete"  style={{color:'#8bc34a' ,backgroundColor:'white',border:'solid #8bc34a 3px'}}>
       <EditIcon />
      </IconButton>

      <IconButton aria-label="delete"  style={{color:'#8bc34a' ,backgroundColor:'white',border:'solid #8bc34a 3px'}}>
       <DoneIcon />
      </IconButton>
        </Grid>
        <Grid item xs={8}  >
        <Typography  variant='h5' style={{textAlign:"right"}} >
          Word of the Day
        </Typography>
        </Grid>
      
      </Grid>


  
    
      </CardContent>
    
    </Card>
  );
}
