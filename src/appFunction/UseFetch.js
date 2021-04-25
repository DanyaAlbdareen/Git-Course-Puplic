import React,{useContext,useEffect, useState}from 'react'
import * as appActionType from '../contextapi/actions/AppActions'
import {AppContext} from '../contextapi/contexts/AppContext'
import axios from 'axios'

export default function UseFetch(params, page) {
    const { appState, appDispatch } = useContext(AppContext);
    const URL = 'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json'

    // const[state , setState] = useState(false)

   useEffect(async () => {
    const cancelToken1 = axios.CancelToken.source()

    try{
    appDispatch({ type: appActionType.MAKE_REQUEST })
    const result = await axios(URL,{
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }

    });
    const data = result.data
    appDispatch({
        type :appActionType.GET_DATA,
        jobs : data})
        // setState(true)
  console.log(appState)
    }catch(err){
     if (axios.isCancel(err)) return
     appDispatch({ type: appActionType.ERROR,error: err}) 
     console.log(err)
    }

    /////////////////////////////////////////////////////////////////////////////////////////
    const cancelToken2 = axios.CancelToken.source()

    try{
      const result2 = await axios(URL,{
        cancelToken: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params }
      });
      appDispatch({
          type : appActionType.UPDATE_HAS_NEXT_PAGE, hasNextPage: result2.data.length !== 0 })
      }catch(err){
       if (axios.isCancel(err)) return
       appDispatch({ type: appActionType.ERROR,error: err}) 
       console.log(err)
      }
      return () => {
        cancelToken1.cancel()
        cancelToken2.cancel()
      }
    },[params, page]);

    return appState
}





