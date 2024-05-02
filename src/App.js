
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid'; 

import {todocontext} from './Context/Todocontext';
import Todolist from './Todolis';
function App() {


  const todos=[
    { id: uuidv4() , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
    { id:uuidv4()  , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
    { id:uuidv4() , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
    { id:uuidv4()  , title: 'Todolist', task: 'Todolist tasks' ,iscompleted :false},
    
    ]
    
     const [todosarray,settodoarry]=useState(todos);

     


  return (
    <div className="App" style={{display:'flex',
    justifyContent:'center',
    alignItems:'center' ,
    background:"#191b1f" ,
    height:'100vh' ,
 
    
    }} >
    
 <todocontext.Provider  value={{todosarray,settodoarry}}> 
    <Todolist/>
    
    </todocontext.Provider>



    </div>
  );
}

export default App;
