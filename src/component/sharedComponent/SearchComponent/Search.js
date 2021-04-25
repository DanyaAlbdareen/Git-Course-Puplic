import React,{useEffect, useState,useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import {AppContext} from '../../../contextapi/contexts/AppContext'
import * as appActionType from '../../../contextapi/actions/AppActions'
import './Search.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Search() {
    const classes = useStyles();

    const URL = 'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json'

    const { appState, appDispatch } = useContext(AppContext);
    const [params, setParams] = useState({location:"" , description:""})
    const [page, setPage] = useState(5)

    useEffect(() => {

    }, [])

  function onParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
    const handelSearch = async ()=>{
      const cancelToken1 = axios.CancelToken.source()

    try{
    const result = await axios(URL,{
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }

    });
    const filterArray = appState.jobsInfo.jobs.filter(
      items=> items.location === params.location ||  items.description === params.description)

        appDispatch({
        type :appActionType.GET_DATA,
        jobs : filterArray})
        }catch(err){
     if (axios.isCancel(err)) return
     appDispatch({ type: appActionType.ERROR,error: err}) 
     console.log(err)
    }
    }
    return (
        <>
            <div className="navbar">
                <div className="navbarDetails">
                    <div className="form">
                        <form className={classes.root} >
                        <input id="inputs"  name="location"  placeholder="Location" onChange={onParamChange}  value={params.location}/>
                        <input id="inputs" name="description" placeholder="Description" onChange={onParamChange} value={params.description}/>
                        </form>
                    </div>
                    <button id="btn" onClick={handelSearch}>SEARCH</button>
                </div>
                
            </div>
            
        </>
    )
}

export default Search
