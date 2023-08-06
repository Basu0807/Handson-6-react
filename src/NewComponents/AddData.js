import React, { useContext } from 'react'
import { ContextData } from './Store';
import { useNavigate } from 'react-router-dom';





const AddData = () => {

  const StuData = useContext(ContextData)
  console.log(StuData);
  const Navi = useNavigate();

  const newObj={
    Name:"",
    Age:"",
    Course:"",
    Batch:"",
    Change:"Edit"
  }
  

const  ClickHandle=(event)=>{
  newObj[event.target.name]= event.target.value

}


const ClickUpdate=()=>{
  
  StuData.push(newObj)
  Navi('/student')

}
  return (
    <>
    <div>

<form className='form'>
  <div className='box1'>
    <div>
    <label htmlFor='Name'>Name</label>
  <input type='text' name='Name' id='Name' placeholder="Enter your Name"onChange={ClickHandle} required/>
    </div>
  
  <div><label htmlFor='Age'>Age</label>
  <input type='text' name='Age' id='Age' placeholder="Enter your Age"onChange={ClickHandle} required/>
  </div>
  
  </div>

  <div className='box1'>
    <div>
    <label htmlFor='Course'>Course</label>
  <input type='text' name='Course' id='Course' placeholder="'Enter your Course" onChange={ClickHandle} required/>
    </div>
  
<div>
<label htmlFor='Batch'>Batch</label>
  <input type='text' name='Batch' id='Batch' placeholder="Enter your Batch" onChange={ClickHandle} required/>
</div>
 
  </div>

  
    <div className='btn'>
    <button onClick={()=>Navi('/student')}>Cancel</button>
    <button onClick={ClickUpdate}>Submit</button>
    </div>
  
  
  
</form>
</div>

    
    
    
    </>


  )
}

export default AddData;