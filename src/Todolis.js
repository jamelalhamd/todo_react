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
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { todocontext } from './Context/Todocontext';
export default function Todolist() {
  
const {todosarray,settodoarry}=React.useContext(todocontext);

 const todolist = todosarray.map((t) => (
    <div key={t.id}><Todo todo={t} />    </div>
  ));
  


  
  


  const [addtask,setaddtask]=useState('');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Card sx={{ minWidth: 275  ,height:'100%'}}>
      <CardContent>
        <Typography variant="h2"  color="black" gutterBottom>
        My tasks
        </Typography>
        <Divider />
       <Togglegroup/> 





   {todolist}



      <Grid container spacing={2} style={{marginTop:'20px'}}>
  <Grid xs={8}>
  <TextField
  
   onChange={(e)=>{
     setaddtask(e.target.value);
   

   }}
   value={addtask}
  id="outlined-basic" label="Ihre Aufgabe" variant="outlined" style={{width:'100%'}} />
  </Grid>
  <Grid xs={4}>
  <Button
  onClick={()=>{
    const newtask={
        id:uuidv4(),
        title:addtask,
        task:'',
        iscompleted:false


    }
    const updatetodosarray=[...todosarray,newtask];
      settodoarry(updatetodosarray);
      setaddtask('');
      localStorage.setItem('todosarray',JSON.stringify(updatetodosarray));
;
  }}
  
  variant="contained" style={{width:'100%' ,height:'100%'}}>Add Task </Button >
  </Grid>

</Grid>


      </CardContent>
    </Card>
      </Container>
    </React.Fragment>
  );
}
