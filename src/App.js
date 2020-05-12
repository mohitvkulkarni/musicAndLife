import React from 'react';
import Login from './Screens/login'
import { HashRouter, Route } from 'react-router-dom';



class App extends React.Component {

  render() {

    const { history } = this.props;
    return (
     
        <HashRouter>
          <div class="parent">          
          <div class="navHeader ">
 
            </div>

            <div class="wrapper" style={{overflowY: "auto"}}>
              <Route exact path='/Login' component={Login} />
              
            </div>


          </div>
        </HashRouter>
  
    );
  }
}

export default App;
