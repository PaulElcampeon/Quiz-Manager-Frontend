import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    
    //Redux tools
    const storeExtractor = useSelector(state => state);
    const { token } = storeExtractor;

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (token.token) {
                        return <Component {...props} />
                    } else {
                        return <Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            } />
    )
}