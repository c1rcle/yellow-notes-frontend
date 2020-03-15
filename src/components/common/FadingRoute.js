import React, { useEffect } from 'react';
import { Fade } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const FadingRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={routeProps => (
        <Fade in={true} appear={true} style={fadeStyle}>
          <div>
            <Component {...routeProps} />
          </div>
        </Fade>
      )}
    />
  );
};

const fadeStyle = {
  transition: 'opacity 0.5s linear'
};

export default FadingRoute;
