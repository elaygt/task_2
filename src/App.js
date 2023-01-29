import '../src/index.css'
import React, {useState} from "react";
import Create from "../src/components/organism/create";
import Update from "../src/components/organism/update";
import Button from "../src/components/atoms/button";
import AtomTable from "./components/atoms/table-next";
import TaskService from "../src/services/TaskService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function App() {
  const [isShow , setIsShow] = useState(null);
  const [isCreate , setIsCreate] = useState(null);
  const [isUpdate , setIsUpdate] = useState(null);
  const [state , setState] = useState({
      selected : []
  }) 

  const taskService = new TaskService();
  const togglePopupUpdate = () => {
    setIsUpdate(update => update ? false : true);
  }
  



  const deleteTaskFromTable = () => {
    if (state && state.selected && state.selected.length > 0) {
      taskService.deleteTask(state.selected);
          handleOnSelect([] , false)
      }
  }

  
  const updateTable = () => {
      
      if(state.selected.length === 1){
          togglePopupUpdate();
      }
  }

  let handleOnSelect = (row, isSelect) => {
      if (isSelect) {
        setState(() => ({
          selected: [...state.selected, row.id]
        }));
      } else {
        setState(() => ({
          selected: state.selected.filter(x => x !== row.id)
        }));
      }
    }
    
  
  const selectRow = {
      mode : "checkbox",
      clickToSelect : true ,
      selected: state.selected,
      style: { backgroundColor: '#FFC0CB' },
      onSelect: handleOnSelect
      

  }
  return (
      <div >
        <h1>crud operations</h1>
          {
                  <header >
                    
                      <p>
                          <Button 
                              className="btn" 
                              text ="Show Tasks"
                              onClick = {() =>  setIsShow(cur => !cur)}
                              />
                          
                          <Button 
                              className="btn"
                              text = "Create Task" 
                              onClick={() => setIsCreate(!isCreate)}/>  
                          
                          <Button 
                               className="btn"  
                               text ="Update Tasks" 
                               onClick = {updateTable }/>

                          <Button 
                               className="btn"  
                               text ="Delete Tasks" 
                               onClick = {deleteTaskFromTable}/>
                          
                      </p>
                      
                          { isUpdate && (
                                      <Update
                                          dataId = {state.selected[0]}
                                          handleClose = {togglePopupUpdate}/>
                              )
                          }

                          <br></br>
                          
                          { isShow && (
                                  <AtomTable 
                                      selectRow = {selectRow}/>
                          )}
          
                          { isCreate && (            
                                  <Create
                                      handleClose = {() => setIsCreate(!isCreate)}/>
                              
                          )}
                      
                  </header>
                   
          } 
      </div>
  );

}

export default App;
