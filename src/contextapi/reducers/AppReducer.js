import * as appActionType from "../actions/AppActions";

export default function AppReducer(state, action) {
switch(action.type)
{
  case appActionType.GET_DATA :
    return { ...state,
      jobsInfo:{
        ...state.jobsInfo , 
        jobs : action.jobs,
        loading: false
      } }

    case appActionType.MAKE_REQUEST :
      return { ...state,
        jobsInfo:{
          ...state.jobsInfo , 
          jobs :[],
          loading: true
        } }

        
    case appActionType.ERROR:
      return { ...state,
        jobsInfo:{
          ...state.jobsInfo , 
          jobs :[],
          loading: false,
          error: action.error
        } }

       case appActionType.UPDATE_HAS_NEXT_PAGE:
      return { ...state,  
        jobsInfo:{
          ...state.jobsInfo , 
          hasNextPage: action.hasNextPage,
          error: action.error
        } }
      default:
      return state
    };

    

    
}









