import { Input } from "../atoms/input";
export default function InputGroups({ className }){

    return (
        <div >
            <Input 
                className = {className}
                label = "Id" 
                type="input" 
                />
            <Input 
                className = {className}
                label = "Task Name" 
                type="input" 
               />
            <Input 
                className = {className}
                label = "Project Name" 
                type="input" 
                />
            </div>
    )
}