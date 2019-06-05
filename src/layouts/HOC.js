import Login  from "./authentication/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import React, { Component } from "react";

const mapStateToProps = ({ authentication }, ownProps) => ({
  isLoggedIn: authentication.isLoggedIn,
  ...ownProps
});

const Log = Component => props => {
    if (props.isLoggedIn)
        return <Component {...props} />
    else
        return <Login/>
}

export default compose(connect(mapStateToProps), Log)