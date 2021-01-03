import React from "react"
import gridStyles from '../components/grid.module.css'


const Container = ({ children }) => {
  return (

    <main className={gridStyles.grid}>
      {children}
    </main>
  )
}

export default Container
