import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import  UserData  from './store/UserData'


const App = () => {
  const [tasklist, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);


  //for store individual task object for eidit purpose
  const [singleTask, setSingleTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);


  let userdata = {
    name:"haseeb",
    national : "pak",
    id:6229
  }


  return (
    <>

      <UserData.Provider value={userdata}>
        <Header />

        <AddTask tasklist={tasklist} setTaskList={setTaskList} singleTask={singleTask} setSingleTask={
          setSingleTask
        } />

        <ShowTask tasklist={tasklist} setTaskList={setTaskList} singleTask={singleTask} setSingleTask={
          setSingleTask} />

      </UserData.Provider>




    </>
  )
}

export default App
