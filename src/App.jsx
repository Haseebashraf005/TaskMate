import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'


const App = () => {
  const [tasklist, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);


  //for store individual task object for eidit purpose
  const [singleTask,setSingleTask] = useState({});

 useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
 

  return (
    <>

      <Header />

      <AddTask tasklist = {tasklist} setTaskList ={setTaskList} singleTask ={singleTask} setSingleTask={
        setSingleTask
      }/>

      <ShowTask tasklist = {tasklist} setTaskList ={setTaskList} singleTask ={singleTask} setSingleTask={
        setSingleTask}/> 




    </>
  )
}

export default App