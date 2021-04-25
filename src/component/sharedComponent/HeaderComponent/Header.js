import React from "react";
import Typography from "@material-ui/core/Typography";
import companyImg from '../../../Images/company.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css'
export default function Header() {
  return (
    <>
      <AppBar position="static" className="appBarHeader" style={{backgroundColor: "#EB6B17",boxShadow:"none"}}>
         <div className="toolbar">
          <Toolbar variant="dense">
          <img id="image" src={companyImg}/>
          <Typography  className="titleJob">
            Jobs
          </Typography>
        </Toolbar>
        </div>

      </AppBar>
    </>
  );
}
