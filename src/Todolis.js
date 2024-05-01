import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import CardContent from '@mui/material/CardContent';
import Togglegroup  from './Toggalegroup';

import Todo from './Todo';
export default function Todolist() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2"  color="black" gutterBottom>
        My tasks
        </Typography>
        <Divider />
       <Togglegroup/> 





      <Todo/>


      </CardContent>
    </Card>
      </Container>
    </React.Fragment>
  );
}
