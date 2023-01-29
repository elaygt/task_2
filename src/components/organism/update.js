import React, { useState } from "react";
import { Input } from "../atoms/input";
import Button from "../atoms/button";
import { tasks } from "../../data/tasks";
import TaskService from "../../services/TaskService";

export default function Update( { dataId , handleClose  } ){
    const pobject = tasks.find( tasks => (tasks.id === dataId));
    const [id , setId] = useState(pobject.id);
    const [taskName , setTaskName] = useState(pobject.task_name);
    const [projectName , setProjectName] = useState(pobject.project_name);
    

    const taskService = new TaskService();

    
    const handleChangeId = (event) => {setId(event.target.value )}

    const handleChangeTaskName = (event) => {setTaskName(event.target.value)}
    
    const handleChangeProjectName = (event) => {setProjectName(event.target.value)}

        const updateTaskEvent = async(event) => {

        event.preventDefault();//?why use here
        await taskService.updateTask(pobject , { id, task_name: taskName, project_name: projectName });
        handleClose()//super() ??
        
    }

    


    return (
        <div className="popup-box">
            <div className="box">
               <form>

               <h5>Update Task</h5>
               {console.log("data in updateTask:" ,dataId)}
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
                    defaultValue={pobject.id}
                    required={true}/>

                <Input
                    className = "input-form"
                    label = "Task Name" 
                    type="input"
                    name="task_name"
                    value={taskName}
                    onChange= {handleChangeTaskName}
                    required={true}
                    />
                    
                <Input 
                    className = "input-form"
                    label = "Project Name" 
                    type="input" 
                    name="project_name"
                    value={projectName}
                    onChange= {handleChangeProjectName}
                    required={true}
                    />
                
                
                <Button 
                    className = "btn-update"
                    text="Update"
                    onClick={ updateTaskEvent } />
                  
               </form>
            </div>
        </div>
    )
}




