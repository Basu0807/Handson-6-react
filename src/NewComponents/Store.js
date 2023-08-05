import React, { createContext, useState } from 'react'
import Student from './Student';
import AddData from './AddData';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import EditData from './EditData';

export const ContextData = createContext();

const Store = () => {
 
    const[Data]=useState([
        
        {
            id: 0,
            Name: "John",
            Age: "24",
            Course: "MERN",
            Batch: "October",
            Change:"Edit"
        },
        {
            id: 1,
            Name: "Doe",
            Age: "25",
            Course: "MERN",
            Batch: "November",
            Change:"Edit"
        },
        {
            id: 2,
            Name: "Biden",
            Age: "26",
            Course: "MERN",
            Batch: "September",
            Change:"Edit"
        },
        {
            i: 3,
            Name: "Barar",
            Age: "22",
            Course: "MERN",
            Batch: "September",
            Change:"Edit"
        },
        {
            id: 4,
            Name: "Christ",
            Age: 23,
            Course: "MERN",
            Batch: "October",
            Change:"Edit"
    
        },
        {
            id: 5,
            Name: "Elent",
            Age: 24,
            Course: "MERN",
            Batch: "November",
            Change:"Edit"
        }
])
  return (
    <>
    
    <ContextData.Provider value={Data}>
    <Routes>
            <Route path ='/' element ={<Home/>}/>
            <Route path ='/student' element ={<Student/>}/>
            <Route path ='/contact' element ={<Contact/>}/>
            <Route path='/student/AddData' element={<AddData/>}/>
            <Route path='/student/EditData' element={<EditData/>}/>
       </Routes>
    </ContextData.Provider>
    </>
  )
}

export default Store