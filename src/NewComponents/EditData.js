import React, { useContext } from 'react'
import {useNavigate,useLocation } from 'react-router-dom'
import { ContextData } from './Store'


const EditData = () => {
  const StuData =useContext(ContextData)
    const IndexValue = useLocation().state-1
    console.log(IndexValue);
   const Navi = useNavigate()

   const updateObj={
    Name:StuData[IndexValue].Name,
    Age:StuData[IndexValue].Age,
    Course:StuData[IndexValue].Course,
    Batch: StuData[IndexValue].Batch,
    Change:"Edit"
   }
   const  ClickHandle=(event)=>{
    
    updateObj[event.target.name]= event.target.value
  
  }
  
  
  const ClickUpdate=()=>{
    
    StuData[IndexValue]= updateObj
    Navi('/student')
  
  }
  return (
    <>
{/* <h1>Edit Student details</h1> */}
<form className='form'>
  <div className='box1'>
    <div>
    <label htmlFor='Name'>Name</label>
  <input type='text' name='Name' id='Name' placeholder={StuData[IndexValue].Name} onChange={ClickHandle} required/>
    </div>
  
  <div><label htmlFor='Age'>Age</label>
  <input type='text' name='Age' id='Age' placeholder={StuData[IndexValue].Age}onChange={ClickHandle} required/>
  </div>
  
  </div>

  <div className='box1'>
    <div>
    <label htmlFor='Course'>Course</label>
  <input type='text' name='Course' id='Course' placeholder={StuData[IndexValue].Course}onChange={ClickHandle} required/>
    </div>
  
<div>
<label htmlFor='Batch'>Batch</label>
  <input type='text' name='Batch' id='Batch' placeholder={StuData[IndexValue].Batch} onChange={ClickHandle} required/>
</div>
 
  </div>

  
    <div className='btn'>
    <button onClick={()=>Navi('/student')}>Cancel</button>
    <button onClick={ClickUpdate}>Submit</button>
    </div>
  
  
  
</form>
    
    

    </>
  )
}

export default EditData