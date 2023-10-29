import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()

const SidebarContextProvider = ({children}) => {
    const [show,setShow] = useState(false)
    const [overView,setOverView] = useState(true)
    const [brackCount,setBrackCount]= useState("Elderly")
    const [overViewActive,setOverViewActive] = useState({title:"Waking up time"})
    const contextInfo={
      show,
      setShow,
      overView,
      setOverView,
      overViewActive,
      setOverViewActive,
      brackCount,
      setBrackCount
    }

  return (
    <SidebarContext.Provider value={contextInfo}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider