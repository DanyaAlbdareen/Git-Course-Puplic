import React, {useEffect} from "react"
import Elevatus from "./component/Elevatus"
import AppProvider from "./contextapi/contexts/AppContext"
import Header from './component/sharedComponent/HeaderComponent/Header'
function ElevatusTask() {

    useEffect(() => {
        console.log("------------------useEffect-------------------")
      }, [])

    return (
        <>
          <Header/>
        <AppProvider>
         <Elevatus/>
       </AppProvider>
        </>
    )
}

export default ElevatusTask
