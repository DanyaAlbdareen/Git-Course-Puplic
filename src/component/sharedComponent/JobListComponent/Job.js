import React from 'react'
import Typography from "@material-ui/core/Typography";
import './Jobs.css'

function Job({job}) {


      return (
        <>

         <div className="divDetails">
        <Typography variant="subtitle2" className="jobList" style={{
          marginTop: "10px",
          marginLeft: "12px",
          fontWeight: "bold",
          paddingBottom: "20px",
          fontSize:"13px",

        }}>
           <span></span>{job.title}<br/><br/>
           <span>{job.location}</span>
           <div id="line"></div><br/>
           <span>{job.type}</span>
           <div id="line"></div><br/>
           <span>{job.company}</span><br/>
           
        </Typography>

        </div>

        
        </>
    )
}

export default Job
