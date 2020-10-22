import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { appInitActions } from './scripts/state/ducks/app-init';
import { PATHS } from './scripts/constants';
import MainNavigation from './scripts/views/components/mainNavigation/MainNavigation';
import Accordion from './scripts/views/components/accordion/Accordion';
import D3Example from './scripts/views/components/d3Example/D3Example';

const mapDispatchToProps = (dispatch) => ({
  initialiseApplication: () => {
    dispatch(appInitActions.initialiseApplication());
  },
});

const App = ({ initialiseApplication }) => {
  useEffect(() => {
    // TODO add conditions e.g. if (receivedDataFromAPI)
    initialiseApplication();
  }, [initialiseApplication]);
  return (
    <React.Fragment>
      <Switch>
        <MainNavigation />
        <Route
          exact
          path={PATHS.defaultPath}
          render={() => (
            <Redirect exact from={PATHS.defaultPath} to={PATHS.mainPath} key="key-root" />
          )}
        ></Route>
      </Switch>
      <Accordion ctaLabel="Click me" />
      <D3Example title="D3 Example" />
    </React.Fragment>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(App));
