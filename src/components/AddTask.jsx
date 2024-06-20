import React, { useState } from 'react'
import "./addtask.css"


const AddTask = ({ tasklist, setTaskList, singleTask, setSingleTask }) => {






  let dateformat = new Date();
  // console.log(dateformat)
  // console.log(dateformat.toLocaleTimeString())
  // console.log(dateformat.toLocaleDateString())


  let handleSubmit = (event) => {

    event.preventDefault()

    // for check if we already eidit a task 
    if (singleTask.id) {

      let dateformat = new Date();

      let updateTaskList = tasklist.map(

        (item) => (item.id === singleTask.id ?

          {
             id: singleTask.id,
             name: event.target.taskTitleInput.value,
             time: `${dateformat.toLocaleTimeString()} ${dateformat.toLocaleDateString()}`
          }
          
          :
          item


        ))

      setTaskList(updateTaskList);
      setSingleTask({})




    } else {

      let newTask = {
        id: dateformat.getTime(),
        name: event.target.taskTitleInput.value,
        time: `${dateformat.toLocaleTimeString()} ${dateformat.toLocaleDateString()}`

      }
      // console.log(newTask)

      setTaskList([...tasklist, newTask])



      setSingleTask({})



    }


  }




  return (
    <>

      <section className='container mt-3 gx-0 '> 
        <div className="row gx-0">
          <div className="col d-flex justify-content-center">
            <div className="addtask-container bg-white">

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='add task' maxLength={60} autoComplete='none'
                  name='taskTitleInput' value={singleTask.name || ""}
                  onChange={e => setSingleTask({ ...singleTask, name: e.target.value })}
                />
                <button className='btn btn-success '>
                  {
                    singleTask.id ? "Update" : "Add"
                  }
                </button>
              </form>

            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default AddTask