import { tasks } from "../data/tasks";
import { validateInputs } from "../components/utilities/validations";

/**
 * @class TaskService
 */
export default class TaskService{
    
/**
 * @function createTask - This function creates a new task row and appends to Task Table
 * @param {Object} taskObject - This is a task object that will be appended in Task Table
 * @return {Object}  - This function returns created task itself 
 * @async
 */
    async createTask(taskObject){
         if( Object.values(taskObject).every ( x => x) && !validateInputs( taskObject ) ){
             tasks.push(taskObject);
                return taskObject;
        }
    }

/**
 * @function Update - This function updates existing task's value or values
 * @param {Object} taskObject - This is a task in Task Table that will be updated with incoming object 
 * @param {Object} newObject - This is new task value of existing task in Task Table that will be replaced with old value
 * @async
 */
    async updateTask(taskObject , newObject){
        if( Object.values(taskObject).every ( x => x) ){

            tasks.forEach( task => {
                
                if(task.id === newObject.id) {
                    task.project_name = newObject.project_name;
                    task.task_name = newObject.task_name;
                }
            })

        }       
    }
/**
 * @function deleteTask - This function removes task or tasks from table
 * @param {Array} tasksArray - This array contains ids that will be removed from table
 * @async 
 */
    /*async deleteTask(tasksArray) {
    if (tasksArray && tasksArray.length > 0) {
      tasks = tasks.filter(task => !tasksArray.includes(task.id));
    }
  }
  


}*/
async deleteTask( tasksArray ){
    if(tasksArray && tasksArray.length > 0){

        let ids ;
        let indexOfDelete; 
        
        tasksArray.forEach( taskId => {
            ids = tasks.map( task => task.id);
            indexOfDelete = ids.indexOf(taskId);
            tasks.splice(indexOfDelete , 1)//splice() method adds and/or removes array elements
        })
    }   
}
}