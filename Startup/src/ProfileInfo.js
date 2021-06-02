import React from 'react';
import './ProfileInfo.css';
import store from "./store";
import Initial from "./Initial";
import NotFound from "./NotFound";
import Profile from './Profile'

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Notfound: false, Profile: false};
    store.subscribe(() => this.checkUser(store.getState()));
  }
  checkUser(state) {
    if(!state.login){
      this.setState({notFound: true, Profile: false })
    }
    else  {
      this.setState({notFound: false, Profile: true});      
    }
  } 
  render() {
    let component;
    if(!this.state.notFound && !this.state.Profile){
      component = <Initial />
    }
    if(this.state.notFound) {
      component = <NotFound />
    }
    if(this.state.Profile && !this.state.notFound) {
      component = <Profile data={JSON.stringify(store.getState())} />
    }
    return (
      component
    );
  }
}
export default ProfileInfo
