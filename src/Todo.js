import * as React from 'react';
import Card from '@mui/material/Card';
import './App.css';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { todocontext ,} from './Context/Todocontext'
import { useEffect } from 'react';
import { ToastContext } from './Context/ToastContext';
export default function Todo( {todo}) {

  const {todosarray,settodoarry}=React.useContext(todocontext);

  function handckick() {
    
    const updatedTodos = todosarray.map((t) => {
      if (t.id === todo.id) {
       t.iscompleted= !t.iscompleted; 

       t.iscompleted == true ?showhideToast( 'add to completed list'):showhideToast( 'add to uncompleted list');

      }
      return t;
     
    });
    

    settodoarry(updatedTodos);
    localStorage.setItem('todosarray',JSON.stringify(updatedTodos));
   
  }

  function closedialog(){

    setshowdeletedialog(false);
    
     }

const [showdeletedialog,setshowdeletedialog]=React.useState(false);

function deletetask(){

const updateedtodo=todosarray.filter((t) => { return t.id !== todo.id; });

settodoarry(updateedtodo);


showhideToast('Task Deleted successfully');

localStorage.setItem('todosarray',JSON.stringify(updateedtodo));

}

function showupdatedialogfunction()
{

setshowupdatedialog(true);

}
function closeupdatedialogfunction()
{

setshowupdatedialog(false);

}
const [showupdatedialog,setshowupdatedialog]=React.useState(false);
const [newtask,setnewtask]=React.useState(todo.title);
    useEffect(() =>{



    });

    const {showhideToast}=React.useContext(ToastContext);
  return (
    <Card className='todocard' sx={{ backgroundColor: '#283593', color: 'white', minWidth: 275 }}>
      <CardContent>



      <Dialog
        open={showupdatedialog}
        onClose={closeupdatedialogfunction}
        PaperProps={{
        
          onSubmit: () => {
           
          
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'black'}}>
           Are you sure that you want to update the Task?
          </DialogContentText>
          <TextField
          
            autoFocus
            onChange={(e)=>{
              const newTaskValue = e.target.value;
            
              // Update the newtask state
              setnewtask(newTaskValue);
            
              // Update the task property of the corresponding task in todosarray
              
            }}
            value={newtask}
            required
            margin="dense"
            id="name"
            name="email"
            label="Task"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeupdatedialogfunction}>Cancel</Button>
          <Button
           onClick={()=>{
          
            const updatedTodos = todosarray.map((t) => {
              if (t.id === todo.id) {
                return { ...t, title: newtask };
              }
              return t;
            });
          
            // Update the todosarray state with the updated task
            settodoarry(updatedTodos);
        
          
              setshowupdatedialog(false);
         
              localStorage.setItem('todosarray',JSON.stringify(updatedTodos));
              showhideToast('Task updated successfully');


           }}
           
          type="submit">Confirm</Button>
        </DialogActions>
      </Dialog>









      <Dialog
        open={showdeletedialog}
        onClose={closedialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure that you want to delet the Task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        wenn Task lost ,sie kann nich zuruck!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closedialog}>Close</Button>
          <Button  onClick={deletetask}    autoFocus>
         ja,Delete
          </Button>
        </DialogActions>
      </Dialog>

        <Grid container spacing={2}>
          <Grid item xs={4} display="flex" justifyContent="space-around" alignItems="center">
          <IconButton  onClick={()=>{




          setshowdeletedialog(true); 
    
       

           }}   className="iconbutton" aria-label="delete" style={{ color: '#8bc34a', backgroundColor: 'white', border: 'solid #8bc34a 3px'  }} >   
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={showupdatedialogfunction}  className="iconbutton" aria-label="edit" style={{ color: '#8bc34a', backgroundColor: 'white', border: 'solid #8bc34a 3px'  }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={ ()=>{
              
         


              handckick()} } className='iconbutton' aria-label="done" style={{ color: '#8bc34a', backgroundColor: todo.iscompleted ? 'green' : 'white', border: 'solid #8bc34a 3px' }}>
              <DoneIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h5' style={{ textAlign: "right" ,textDecoration: todo.iscompleted?  'line-through':'' }}>
              {todo.title}
            </Typography>
        
            <Typography variant='h6' style={{ textAlign: "right",textDecoration: 'line-through' }}>
              {todo.task}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
