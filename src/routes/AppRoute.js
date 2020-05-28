/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/layout/default';

const AppRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        );
      }}
    />
  );
};

export default AppRoute;
