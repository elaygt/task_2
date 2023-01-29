import { tasks } from "../../data/tasks";
import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import { COLUMNS } from "./cloumn";

export default function AtomTable( { selectRow } ){
    return (
        <div>
            <BootstrapTable 
                keyField='id' 
                data={ tasks } 
                columns={ COLUMNS }
                selectRow={selectRow}/>
        </div>
    )
    
}