import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import store from '../reducers/store';

import Index from './index';
import About from './about';
import Cards from './Cards';
import Layout from './Layout';
import NotFoundPage from './NotFound';


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export class App extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){

  }
  render(){
    return(
      // <Provider store={createStoreWithMiddleware(reducers)}>
        <Layout>
          <Switch>
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Index}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      // </Provider>
    );
  }
}

// export const App = () => (
//   // <Provider store={createStoreWithMiddleware(reducers)}>
//     <Layout>
//       <Switch>
//         <Route exact path="/cards" component={Cards} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/" component={Index}/>
//         <Route component={NotFoundPage} />
//       </Switch>
//     </Layout>
//   // </Provider>
// );

export default App;
