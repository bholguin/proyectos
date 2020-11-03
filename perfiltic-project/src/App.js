import {Fragment, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import * as actions from './01_actions/index';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import IndexApp from './IndexApp';
import reducers from './02_reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

function configureStore() {
  const store = createStoreWithMiddleware(reducers);
  return store;
}
const store = configureStore();

const RootContainerComponent = (props) => {

  console.log(props)
  useEffect(() => {
    props.getToken();
  },[]);
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
console.log(actions)
function mapPropsToState(state, ownProps) {
  return {
      //auth: state.auth,
  }
}
connect(mapPropsToState, actions)(RootContainerComponent);

function App() {
  return (
    <Provider store={store}>
        <RootContainerComponent />
    </Provider>
  );
}

export default App;
