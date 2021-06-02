import React from 'react';
import store from "./store";
import Repo from './Repo'
import './UserRepos.css'




class ReposList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    store.subscribe(() => this.fechRepos(store.getState()));
  }
  async fechRepos(user){
    if(user.login){
      const data = await fetch(user.repos_url).then((res)=> res.json());
      this.setState({data})
    }
    if(user.message) {
      this.setState({ data: [] })
    }    
  }
  render() {
    let component;
    if(!this.state.data.length){
      component = null;
    }
    else {
      component = <div className="UserRepos">
                    <h2>Repositories ({this.state.data.length})</h2>
                    {this.state.data.map(element=> <Repo url={element.html_url} name={element.name} description={element.description} />)}
                  </div>
    }
    return (
      component
    )
  }
}
export default ReposList


