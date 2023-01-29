import React, { useState} from "react";
import Button from "../atoms/button";
import { Input } from "../atoms/input";
import TaskService from "../../services/TaskService";


export default function Create( {handleClose} ){//close button calls handleclose
    const [id , setId] = useState(null);
    const [taskName , setTaskName] = useState(null);
    const [projectName , setProjectName] = useState(null);
    
    
    const taskService = new TaskService();
    
    

    const handleChangeId = (event) => {
        setId(event.target.value);
      }
    const handleChangeTaskName = (event) => {
        setTaskName(event.target.value)
    }
    const handleChangeProjectName = (event) => {
        setProjectName(event.target.value)

    }

    const createTaskFunc = async() => {
        const obj = {id, task_name: taskName, project_name: projectName};
        await taskService.createTask(obj); 
        handleClose() //super()??
    }
    


    return (
        <div className="popup-box">
            <div className="box">
               <form>
                
                <h5>Create Task</h5>
                <Button 
                    className="close_button"
                    onClick={handleClose} 
                    >close</Button>
                 <Input
                    className = "input-form"
                    label = "Id" 
                    type="input" 
                    name="id"
                    value={id}
                    onChange= {handleChangeId}
                    required={true}
                    />
                
                <Input
                    className = "input-form"
                    label = "Task Name" 
                    type="input"
                    name="task_name"
                    value={taskName}
                    onChange= {handleChangeTaskName}
                    required={true}/>
                    
                <Input
                    className = "input-form"
                    label = "Project Name" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    required={true}/>
                <Button 
                    className = "btn-create"
                    text="Create"
                    onClick={ createTaskFunc } />  
               </form> 
            </div>
        </div>
    )
}



