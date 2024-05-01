import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import Togglegroup  from './Toggalegroup';
import TextField from '@mui/material/TextField';
import Todo from './Todo';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';
import { v4 as uuidv4, v4 } from 'uuid';export default function Todolist() {

const todos=[
{ id: uuidv4() , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
{ id:uuidv4()  , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
{ id:uuidv4() , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
{ id:uuidv4()  , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
{ id:uuidv4()  , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
]


const todolist = todos.map((t) => (
    <div key={t.id}><Todo titel={t.title} task={t.task} iscompleted={t.iscompleted} /></div>
  ));
  

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





   {todolist}



      <Grid container spacing={2} style={{marginTop:'20px'}}>
  <Grid xs={8}>
  <TextField id="outlined-basic" label="Ihre Aufgabe" variant="outlined" style={{width:'100%'}} />
  </Grid>
  <Grid xs={4}>
  <Button variant="contained" style={{width:'100%' ,height:'100%'}}>Add Task </Button >
  </Grid>

</Grid>


      </CardContent>
    </Card>
      </Container>
    </React.Fragment>
  );
}
