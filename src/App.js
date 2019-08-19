import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from './Router/Router'


class App extends Component {
  render() {
    return (
        <Router>
            {
                router.map((router,index)=>{

                    if(router.exact){

                        return <Route exact key={index} path={router.path}
                                      render = {
                                          props =>(
                                              <router.component {...props} routes = {router.routes}/>
                                          )
                                      }
                        />

                    }else{

                        return <Route key={index} path={router.path}
                                      render = {
                                          props =>(
                                              <router.component {...props} routes = {router.routes} />
                                          )
                                      }
                        />

                    }

                })
            }
        </Router>
    );
  }
}

export default App;
