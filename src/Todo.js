import * as React from 'react';
import Card from '@mui/material/Card';
import './App.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { todocontext } from './Context/Todocontext';
export default function Todo( {todo}) {

  const {todosarray,settodoarry}=React.useContext(todocontext);

  function handckick() {
    const updatedTodos = todosarray.map((t) => {
      if (t.id === todo.id) {
       t.iscompleted= !t.iscompleted; 
      }
      return t;
    });


    settodoarry(updatedTodos);
  }


  return (
    <Card className='todocard' sx={{ backgroundColor: '#283593', color: 'white', minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4} display="flex" justifyContent="space-around" alignItems="center">
          <IconButton    className="iconbutton" aria-label="delete" style={{ color: '#8bc34a', backgroundColor: 'white', border: 'solid #8bc34a 3px'  }} >   
              <DeleteIcon />
            </IconButton>
            <IconButton className="iconbutton" aria-label="edit" style={{ color: '#8bc34a', backgroundColor: 'white', border: 'solid #8bc34a 3px'  }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={ ()=>{handckick()} } className='iconbutton' aria-label="done" style={{ color: '#8bc34a', backgroundColor: todo.iscompleted ? 'green' : 'white', border: 'solid #8bc34a 3px' }}>
              <DoneIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' style={{ textAlign: "right" }}>
              {todo.title}
            </Typography>
        
            <Typography variant='h6' style={{ textAlign: "right" }}>
              {todo.task}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
