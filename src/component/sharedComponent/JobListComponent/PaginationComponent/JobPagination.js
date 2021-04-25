import React from 'react'
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import './JobPagination.css'

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    textAlign:"center"
  },

  btn1:{
    border:"1.5px solid #EB6B17",
    borderRadius: "10px",
    backgroundColor:"none",
    marginLeft:"5px",
    marginRight:"10px"

  },

  btn2:{
    border:"none",
    backgroundColor:"none",
    marginLeft:"5px",
    marginRight:"10px"

  }

});
function JobPagination({page,setPage}) {
  
    const classes = useStyles();
    const { items } = usePagination({
      count: page,
    });

    return (
        <>
     <nav >
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button className={classes.btn1} type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                {page}
              </button>
            );
          } else {
            children = (
              <button className={classes.btn2} type="button" {...item}>
                 {type.toUpperCase()}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>

        </>
    )
}

export default JobPagination

