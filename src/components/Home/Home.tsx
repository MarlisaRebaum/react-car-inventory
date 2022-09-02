import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';

interface Props {
    title: string;
};

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    mainText: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    textSpacing: {
        marginBottom: '40px',
        fontSize: '50px',
    },
    buttonText: {
        color: 'white',
        textDecoration: 'none',
    },
    button: {
        backgroundColor: 'rgb(0, 45, 98)',
        padding: '20px',
    },
    buttonHover: {
      "&:hover": {
        backgroundColor: 'white',
        color: 'rgb(0, 45, 98)',
      },
    },
});

export const Home = ( props: Props ) => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={classes.mainText}>
                    <h1 className={classes.textSpacing}>{props.title}</h1>
                    <Button>
                    <br/>
                    <Link to='/login' className={`${classes.buttonText} ${classes.button} ${classes.buttonHover}`}>Take me to my Car Inventory</Link>
                    </Button>

                </div>
            </div>
        </>
    )
}
