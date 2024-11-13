import React from 'react'
import Navigation from './navbar/Navigation'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Navigation/>
      <div style={{minHeight:"90vh"}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout
