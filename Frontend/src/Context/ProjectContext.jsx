import React, { createContext } from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

export const ProjectContext = createContext()

const ProjectContextProvider = ({ children }) => {
  const currency = <TbCurrencyNaira />
  // const backendUrl = import.meta.env.VITE_BACKEND_URL

  const value = {
    currency,
    // backendUrl
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider
