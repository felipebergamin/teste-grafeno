import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/layout/default';

const AppRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        );
      }}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default AppRoute;
