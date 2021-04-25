import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
export const AppContext = createContext({});

const AppProvider = (props) => {
  

  const appInitialState = {  
    jobsInfo:{
      jobs: [],
      loading: false,
      error :"",
      hasNextPage:false

    }
  };

  const [appState, appDispatch] = useReducer(AppReducer,appInitialState);

  return (
    <AppContext.Provider
      value={{
        appState,
        appDispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider;







