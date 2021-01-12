import React from 'react'
import {  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const  AdminPrivateRouter = ({component: Component, authData , ...rest}) => {
  return (
    <Route {...rest} render={props => 
       (authData.isAuthenticated === false )?(<Component {...props} />):( <Redirect to="/"/> )} />
  );

};
 

AdminPrivateRouter.propTypes = {  
  authData:propTypes.object.isRequired
};

const mapStateToProps = state => ({
    authData:state.authData
});

export  default  connect(mapStateToProps)(AdminPrivateRouter);
