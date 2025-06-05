import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import AppLayout from './layouts/AppLayout'

const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children : [

    ]

  }
])


const App = () => {
  return (
    <div>App</div>
  )
}

export default App