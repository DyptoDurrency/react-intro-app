import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        };
    }, []); 

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
        
    })
    // useEffect()

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push( classes.red );
    }
    if (props.personsLength <= 1) {
      assignedClasses.push( classes.bold );
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Suck tiddies, spend fiddies</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);