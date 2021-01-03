import React from "react"
import gridStyles from '../components/grid.module.css'


const Grid = ({ children }) => {
  return (

    <main className={gridStyles.gridAbout}>
      {children}
    </main>
  )
}

export default Grid
