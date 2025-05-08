import React from 'react'
import Sidebar from './Sidebar'
import TaskHeader from './TaskHeader'
import Dashboard from './Dashboard'

const TaskManager = () => {
  return (
    <div>
      <Sidebar />
      <TaskHeader />
      <Dashboard />
    </div>
  )
}

export default TaskManager
