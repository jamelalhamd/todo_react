import * as React from 'react';
import './App.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { todocontext } from './Context/Todocontext';
import { useMemo } from 'react';
export default function Togglegroup() {
  const {todosarray,settodoarry}=React.useContext(todocontext);

  const todos = JSON.parse(localStorage.getItem('todosarray'));
  const [pointer,setpointer] = React.useState("all");
 function alltask ()
 {


  settodoarry(todos);
  
 // setpointer("all");

 }
 function completetask() {
  const completed = 
    todos.filter((t) => t.iscompleted === true);
  // Include todos as a dependency
  const data=completed??" ";
  settodoarry(data);
 }
 function notcompletedtask() {
  const notcompleted = todos.filter((t) => t.iscompleted === false);
  const data=notcompleted??" ";
  settodoarry(data);
  //setpointer("notdone");
}

function changedisplay(e)
{

setpointer(e.target.value);

}
  return (
    <ToggleButtonGroup
  style={{marginBottom:'20px', marginTop:'5px'}}
      exclusive
      value={pointer}
      aria-label="text alignment"
 onChange={changedisplay}
    >
      <ToggleButton 
      
    onClick={completetask}
      className='toggle'  
       value="done"
        aria-label="left aligned">
   Done
      </ToggleButton>
      <ToggleButton onClick={notcompletedtask} className='toggle'value="notdone" aria-label="centered">
   not Done
      </ToggleButton>
      <ToggleButton  onClick={alltask} className='toggle' value="all" aria-label="right aligned">

All
      </ToggleButton>

    </ToggleButtonGroup>
  );
}
