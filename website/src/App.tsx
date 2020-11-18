import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { appInitActions } from './scripts/state/ducks/app-init';
import { PATHS } from './scripts/constants';
import MainNavigation from './scripts/components/mainNavigation/MainNavigation';
import MainView from './scripts/views/MainView/MainView';
import TipsView from './scripts/views/TipsView/TipsView';

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
    <Router>
        <MainNavigation />
        <Route path={PATHS.mainPath} exact component={MainView} />
        <Route path={PATHS.tipsPath} exact component={TipsView} />
    </Router>
  );
};

export default connect(null, mapDispatchToProps)(App);
