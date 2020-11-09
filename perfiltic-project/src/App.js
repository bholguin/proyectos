import React, { Fragment, Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import * as actions from './01_actions/index';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './02_reducers/index';

import IndexApp from './03_components/indexapp/IndexApp';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

function configureStore() {
  const store = createStoreWithMiddleware(reducers);
  return store;
}


class RootContainerComponent extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' component={IndexApp} />
          </Switch> 
        </Fragment>
      </BrowserRouter>
    )
  }
}
function mapPropsToState(state) {
  return {
    auth: state.auth,
  }
}
let RootContainer = (connect(mapPropsToState, actions)(RootContainerComponent));
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
