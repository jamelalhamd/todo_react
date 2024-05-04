import * as React from 'react';
import './App.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { todocontext } from './Context/Todocontext';
export default function Togglegroup() {
  const {todosarray,settodoarry}=React.useContext(todocontext);
  const {fullarry,setfullatty} = React.useState(todosarray);
  const todos = JSON.parse(localStorage.getItem('todosarray'));
 function alltask ()
 {


  settodoarry(todos);
  


 }

 function completetask ()
 {

  const completed = todos.filter((t) => t.iscompleted === true);
  settodoarry(completed);

 }
 function notcompletedtask() {
  const notcompleted = todos.filter((t) => t.iscompleted === false);
  settodoarry(notcompleted);
}

  return (
    <ToggleButtonGroup
  style={{marginBottom:'20px', marginTop:'5px'}}
      exclusive

      aria-label="text alignment"
    >
      <ToggleButton 
      
    onClick={completetask}
      className='toggle'   value="left" aria-label="left aligned">
   Done
      </ToggleButton>
      <ToggleButton onClick={notcompletedtask} className='toggle'value="center" aria-label="centered">
   not Done
      </ToggleButton>
      <ToggleButton  onClick={alltask} className='toggle' value="right" aria-label="right aligned">

All
      </ToggleButton>

    </ToggleButtonGroup>
  );
}
