import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import "./style.css"
import { ContextData } from "./Store";


 function Student(){
const StuData = useContext(ContextData)

// console.log(StuData);
    

    return(
        <> 
        <div className="container">
        <h1>Student Details</h1>
        <Link  to="/student/AddData" id="StudentDetails">Add New Students</Link>
        </div>
        
        
        <table className="tableContainer">
            <thead> 
        <tr>
         <th>Name</th>   
         <th>Age</th>   
         <th>Course</th>   
         <th>Batch</th>   
         <th>Change</th>   
         {/* <th>Delete</th> */}
        </tr>
        </thead>
       
        
            {StuData.map((item,index)=>{
                // console.log(index);
                return(
                    <tbody key={index}>
                    <tr>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td><Link to="/student/EditData" state={index+1}>{item.Change}</Link></td>
                    {/* <td onClick={()=>{ console.log(StuData[index])}}>Remove</td> */}

                    </tr>
                    </tbody>
                   
                    
                   
                )
            })}
        
      </table>
        
      
            
            
      
        </>
    )
 }

 export default Student;