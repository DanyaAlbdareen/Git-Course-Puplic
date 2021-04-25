import React,{useContext,useState}from 'react'
import {AppContext} from '../contextapi/contexts/AppContext'
import LoadingBackdrop from '../api/Loading/LoadingBackdrop'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Search from './sharedComponent/SearchComponent/Search'
import UseFetch from '../appFunction/UseFetch'
import Job from './sharedComponent/JobListComponent/Job'
import JobPagination from './sharedComponent/JobListComponent/PaginationComponent/JobPagination'

import {Link} from "react-router-dom";

import './GitHubJobs.css'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"10px",
      marginLeft:"0px",

    },
    paper: {
      height:"280px",
      width: "200px",
      borderRadius:"7px",
      border:"2px solid #ECECEC",

    },
    control: {
      padding: theme.spacing(2),
    },
   
  }));
function GitHubJobs() {
    const { appState, appDispatch } = useContext(AppContext);
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)

    const classes = useStyles();
    UseFetch(params, page)


      return (
        <>
        <div className="container"> 
         
        <div className="insideContainer"> 
        <div className="search">
        <Search/>
        </div> <br/>
        <Typography className="titlePage" >
                Recent Openings 
        </Typography> 
        {appState.jobsInfo.loading &&<LoadingBackdrop isLoading={appState.jobsInfo.loading}/>}
        {appState.jobsInfo.error && <h1>Error. Try Refreshing.</h1>}
       
        <Grid container justify="center" spacing={2} className={classes.root}>
          
          {appState.jobsInfo.jobs.map((row) => (
             <Grid key={row.id} item className={classes.items} >
             <Paper className={classes.paper}>
             <Job key={row.id} job={row}/>
            
            <Grid  container spacing={4} justify='flex-end' className="threeBtn" style={{paddingTop:"0px",paddingRight:"10px"}}>
                  <Grid item className="btnCard">
                  <Link  className="btn" to={{ pathname: '/jobDetails',
                  state: { title: row.title , type :row.type , date :row.created_at , 
                  description : row.description , companyUrl :row.company_url}}} id="btnView">VIEW</Link>
                  </Grid>
            </Grid>
             </Paper><br/>
            
            </Grid>
          ))}
        </Grid>
        <div className="pagination">
        <JobPagination page={page} setPage={setPage}/>
        </div><br/><br/>
        </div>

        </div> 
        </>
    )
}

export default GitHubJobs
