import React,{useEffect} from 'react'
import { BrowserRouter, Route,  Switch  } from "react-router-dom";
import GitHubJobs from './GitHubJobs'
import JobDetails from './sharedComponent/JobDetailComponent/JobDetails'
function Elevatus() {
  
  useEffect(() => {
  }, [])

    return (
        <>
           <BrowserRouter>
            <Switch>
            <Route exact path='/' component={GitHubJobs} />
            <Route exact path='/jobDetails' component={JobDetails} />

            </Switch> 
          </BrowserRouter>
        </>
    )
}

export default Elevatus
