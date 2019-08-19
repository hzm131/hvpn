import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./comments/Header/Header";
import Footer from "./comments/Footer/Footer";
import router from "./Router/Router";

class App extends Component {
  render() {
    return (
        <Router>
            <Header />
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
            <Footer />
        </Router>
    );
  }
}

export default App;
