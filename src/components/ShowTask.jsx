import React, { useContext } from 'react'
import "./showtask.css"
import Data from "./data.js"
import { UserData } from '../store/UserData.js'

const ShowTask = ({ tasklist, setTaskList,singleTask,setSingleTask }) => {

  let handleDelete = (id) => {

    let updatelist = tasklist.filter(item => item.id !== id)
    setTaskList(updatelist);

  }


  
  let handleEidit = (id) => { 

    let eidittaskelement = tasklist.find(item=> item.id ===id)
    setSingleTask(eidittaskelement)

  }

  let userdetails = useContext(UserData)
  console.log(userdetails)


  return (
    <>
    {
      tasklist.length >0 &&
      
      <section className='container mt-4 bg-white' id='todo-section'>

        <div className="section1 d-flex pt-4">

          <h3>Todo <span className='count'> {tasklist.length} </span></h3>
          <button className='btn btn-primary' onClick={() => setTaskList([])}>Clear All</button>

        </div>

        <hr />


        <div className="item-list-container">

          <div className="container">


            <div className="row" id='item-container'>

              {
                tasklist.map((item) =>

                  <div className="col-md-3 gx-0 " key={item.id}>
                    <div className="task-container d-flex border my-3 ">

                      <div className="left-section">
                        <h4>{item.name}</h4>
                        <p className='mb-0'>{item.time}</p>
                      </div>

                      <div className='icon-container'>
                        <span><i className="fa-regular fa-pen-to-square" onClick={() => handleEidit(item.id)}></i></span>
                        <span><i className="fa-solid fa-trash" onClick={() => handleDelete(item.id)}></i></span>
                      </div>

                    </div>

                  </div>

                )

              }

            </div>


          </div>


        </div>



      </section>
}



    </>
  )
}

export default ShowTask