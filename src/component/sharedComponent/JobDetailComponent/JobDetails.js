import React,{useContext,useEffect} from 'react'
import {AppContext} from '../../../contextapi/contexts/AppContext'
import { makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import './JobDetails.css'
import axios from 'axios'
import * as appActionType from '../../../contextapi/actions/AppActions'
import Typography from "@material-ui/core/Typography";
import FooterJobDetails from './FooterComponent/FooterJobDetails'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"30px"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
function JobDetails(props) {
    const URL = 'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json'

    const classes = useStyles();
    const {appState, appDispatch } = useContext(AppContext);
    const {title , type , date , description , companyUrl} = props.location.state
    const shortDescription = description.substr(3,50)

    useEffect(async() => {
   const cancelToken1 = axios.CancelToken.source()
    try{
    appDispatch({ type: appActionType.MAKE_REQUEST })
    const result = await axios(URL,{
      cancelToken: cancelToken1.token,
    });
    const data = result.data
    appDispatch({
        type :appActionType.GET_DATA,
        jobs : data})
  console.log(appState)
    }catch(err){
     if (axios.isCancel(err)) return
     appDispatch({ type: appActionType.ERROR,error: err}) 
     console.log(err)
    }

}, [])
    
    return (
        <>

<Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} >
        <Grid container justify="center" spacing={2}>
                <Grid item className="contantItem1">
                        <Grid container spacing={2} className="paper1">
                        {appState.jobsInfo.jobs.map((row) => (
                            <Grid item key={row.id} xs={12}  className={classes.items}>
                                <Paper className="itemListPaper">
                                <Typography  variant="subtitle2" id="majorTitle">
                                   {row.title} 
                                </Typography>
                                <Typography  variant="subtitle2" id="location">
                                   {row.location} 

                                </Typography>
                                  <hr/>
                                  <Typography  variant="subtitle2" id="description">
                                   {row.description.substr(3,50)} 
                                </Typography>
                                </Paper>
                            </Grid>
                        ))}
                        </Grid>
                </Grid>
        <Grid item className="contantItem2" sm={6}>
              <Paper className={classes.paper2 ,"paper2"} >
                  
              <Typography  variant="subtitle2" id="majorTitleDetails">
                {title} <span >{type}</span>
            </Typography>
            <Typography variant="subtitle2"  id="createtAt">
                  posted on: {date}
            </Typography><br/>
            <Typography  variant="subtitle2" id="descriptionDetails">
                <span>Description</span> <br/>{shortDescription} 
            </Typography><br/>
            <Typography  variant="subtitle2" id="requirement">
                 <span>Requirements</span><br/>Requirements Testing<br/><br/>
                 <span>Summary</span>
            </Typography>

            {/* ////////////////////////////// Summart/////////////////////////////////////// */}
            <Typography  variant="subtitle2">
                <div className="tableDiv">

                <Grid container direction="row"   className="summary">
                <Grid item xs={6} sm={4} md={4} className="rangeSalary">
                Salary Range:
                  </Grid>
                  <Grid item xs={6} sm={4} md={2} className="salary">
                  700-110
                  </Grid>

                  <Grid item xs={6} sm={4} md={2} className="major">
                    Major:
                  </Grid>
                  <Grid item xs={6} sm={4} md={4} className="resultMajor">
                  Computer and information Systems
                  </Grid>
                  
                  {/* ////////////////////////////////////////////// */}
                  <Grid item xs={6} sm={4} md={4} className="indestry">
                   Indestry:
                  </Grid>
                  <Grid item xs={6} sm={4} md={2} className="computer">
                  Computer Software
                  </Grid>
                  <Grid item xs={6} sm={4} md={2} className="career">
                  Career Level:
                  </Grid>
                  <Grid item xs={6} sm={4} md={4} className="junior">
                  Junior
                  </Grid>
                  {/* ////////////////////////////////////////////////////////////// */}
                  <Grid item xs={6} sm={4} md={4} className="experience">
                  Experience Required:
                  </Grid>
                  <Grid item xs={6} sm={4} md={2} className="years">
                   1 year(s) minimum 
                  </Grid>
                  <Grid item xs={6} sm={4} md={2} className="gpa">
                   GPA:
                  </Grid>
                  <Grid item xs={6} sm={4} md={4} className="resultGPA">
                  90
                  </Grid>
                  </Grid>
               </div>
            </Typography><br/>
              
            <Typography  variant="subtitle2" id="required">
                 <span>Required Skills</span> 
              </Typography>
              <Typography  variant="subtitle2" className="skills">
                 <span style={{marginLeft:'0px'}}>Css</span>                 
                 <span>Html</span>
                 <span>Reactjs</span>                 
                 <span>Restfull Api's</span> 
                 <span>Js</span> 

              </Typography><br/>
              <hr/>
              <Typography  variant="subtitle2" id="required">
                 <span>Languages</span> 
              </Typography><br/>
              <Typography  variant="subtitle2" className="languges">
                 <span style={{marginLeft:'0px'}} id="boldPart">EN-<span style={{fontWeight:'normal'}}>Full professional proficiency</span></span>                
                 <span id="boldPart">AR-<span style={{fontWeight:'normal'}}> professional working proficiency</span></span>                
              </Typography><br/>
              
              <hr/>
              </Paper>
        </Grid>
        </Grid>
    </Grid>

</Grid>
<FooterJobDetails/>


        </>
    )
}

export default JobDetails
