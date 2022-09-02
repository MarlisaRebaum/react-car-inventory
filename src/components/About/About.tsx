import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles,  } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  background: {
    backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
  },
  header: {
    color: 'white',
    textAlign: 'center',
    marginTop: '10%',
  },
  mainText: {
    textALign: 'center',
    color: 'white',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '2%',
    lineHeight: '3',
    textAlign: 'justify',
  },
})

export const About = () => {
  
  const classes = useStyles();
  
  return (
    <>
       < Navbar />
       <div>
          <div className={classes.background}>
              <h1 className={classes.header}>About</h1>
              <p className={classes.mainText}>
              Automotive Car Inventory is the leading business in helping small car 
              dealerships keep track of their inventory. Founded in 2021 its goal 
              is to help small businesses be more efficient. Our free account lets 
              users add cars into the inventory and delete them when they are sold. 
              This allows businesses to always keep track of their current inventory. 
              Create your <Link to='/register'> free account</Link> today or 
              <Link to='./contact'> contact us</Link> with questions!
              </p>
          </div>
        </div>
    </>
  )
}
