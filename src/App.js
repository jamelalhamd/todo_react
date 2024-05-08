import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { useState } from 'react';
//import { v4 as uuidv4} from 'uuid'; 

import {todocontext} from './Context/Todocontext';
import Todolist from './Todolis';
import { createTheme } from '@mui/material';
import Mysnackbar from './Mysnackbar';
import { ToastContext } from './Context/ToastContext';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0B8307'
      }
    },
    typography: {
      fontSize: 20 // Set font size to 10px
    }
  });

 
  const todos = JSON.parse(localStorage.getItem('todosarray'))??[];

/*
  const todos=[
    { id: uuidv4() , title: '', task: 'Todolist tasks' ,iscompleted :false},
    { id:uuidv4()  , title: '', task: 'Todolist tasks' ,iscompleted :false},
    { id:uuidv4() , title: '', task: 'Todolist tasks' ,iscompleted :false},
    { id:uuidv4()  , title: '', task: 'Todolist tasks' ,iscompleted :false},
    
    ]
    */
     const [todosarray,settodoarry]=useState(todos);

     const [open, setOpen] = useState(false); 
     const [message, setmessage] = useState("rrrrrrrrrrrrrrrrr"); 


function showhideToast(message){
  
  setOpen(true);
  setmessage(message);
  setTimeout(function(){setOpen(false);
  },2000);

}

  return (
    <div className="App" style={{display:'flex',
    justifyContent:'center',
    alignItems:'center' ,
    background:"#191b1f" ,
    height:'100vh' ,

 
    
    }} >
    
 <todocontext.Provider  value={{todosarray,settodoarry}}> 

 <ToastContext.Provider value={{showhideToast}} >
    <Todolist/>
    <Mysnackbar open={open} message={message}/>
    </ToastContext.Provider>
    </todocontext.Provider>



    </div>
  );
}

export default App;
